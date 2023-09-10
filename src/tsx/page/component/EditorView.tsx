import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm' // 渲染表格、checkBox 等组件
import rehypeRaw from 'rehype-raw' // 允许原生 html 渲染
import rehypeSlug from 'rehype-slug' // 标题标签标记描点
import rehypeHighlight from 'rehype-highlight' // 代码高亮标记
import remarkMath from 'remark-math' // 数学公式支持
import rehypeKatex from 'rehype-katex' // 数学公式支持
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell'
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import nginx from 'highlight.js/lib/languages/nginx';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import properties from 'highlight.js/lib/languages/properties';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import {Col, message, Row} from "antd";
import React from "react";
import TextArea from "antd/es/input/TextArea";
import {EditorContext} from "../Editor";
import {class_md_preview, editor_text_area} from "./properties/ElementNameContainer";
import InputElementHelper from "../../util/InputElementHelper";

const stackMaxSize = 20;
const undoStack: string[] = new Array<string>(); // 用于存储撤销历史记录
// 初始为空
undoStack.push("");
const redoStack: string[] = new Array<string>(); // 用于存储重做历史记录

// 阻断事件向上冒泡
function stopEvent(event: any) {
    event.preventDefault();
}

export function contentChangeUndoStackHandler(content: string) {
    undoStack.push(content);

    // 栈容量限制
    if (undoStack.length > stackMaxSize) {
        undoStack.shift();
        // 清空
        redoStack.length = 0;
    }
}

export function contentChangeTextAreaPostHandler(element: HTMLTextAreaElement, cursorIndex: number) {
    // react 更新和 dom 操作间是异步的，这里用延时不太靠谱地指定 dom 操作在 react 更新后执行，
    setTimeout(function () {
        element.setSelectionRange(cursorIndex, cursorIndex)
    }, 50);
}

function EditorView() {
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <EditorContext.Consumer>
            {({content, updateContent}) => (
                <Row gutter={[8, 8]} style={{
                    marginTop: "8px",
                    borderBottom: "solid",
                    borderBottomWidth: "2px",
                    borderBottomColor: "#adadad",
                    paddingBottom: "8px"
                }}>
                    <Col span={12} style={{maxHeight: "600px"}}>
                        {contextHolder}
                        <TextArea id={editor_text_area} rows={27}
                                  placeholder="这里是 markdown 编辑器写作区，请开始您的创作吧！"
                                  value={content}
                                  onChange={event => {
                                      contentChangeUndoStackHandler(event.target.value);

                                      updateContent(event.target.value);
                                  }}
                                  onKeyDown={(event) => {
                                      // 如果是 ctrl 组合键
                                      if (event.ctrlKey) {
                                          // @ts-ignore
                                          let element: HTMLTextAreaElement = document.getElementById(editor_text_area);

                                          switch (event.key) {
                                              case "s":
                                                  stopEvent(event);

                                                  messageApi.success("保存成功");
                                                  break;
                                              case "d":
                                                  stopEvent(event);

                                                  InputElementHelper.removeSelectedLine(element, ({
                                                                                                      leftPart,
                                                                                                      rightPart
                                                                                                  }) => {
                                                      let nextContent = leftPart + rightPart;
                                                      updateContent(nextContent);

                                                      contentChangeUndoStackHandler(nextContent);
                                                      contentChangeTextAreaPostHandler(element, leftPart.length);
                                                  });
                                                  break;
                                              case "z":
                                                  stopEvent(event);

                                                  if (undoStack.length > 0) {
                                                      let nextContent = undoStack.pop();

                                                      if (nextContent == null) {
                                                          break;
                                                      }

                                                      redoStack.push(nextContent);

                                                      if (nextContent == element.textContent!) {
                                                          nextContent = undoStack.pop();
                                                          redoStack.push(nextContent!);
                                                      }
                                                      updateContent(nextContent);
                                                  }

                                                  break;
                                              case "y":
                                                  stopEvent(event);

                                                  if (redoStack.length > 0) {
                                                      let nextContent = redoStack.pop();
                                                      if (nextContent == null) {
                                                          break;
                                                      }
                                                      undoStack.push(nextContent);

                                                      if (nextContent == element.textContent) {
                                                          nextContent = redoStack.pop();
                                                          undoStack.push(nextContent!);
                                                      }
                                                      updateContent(nextContent);
                                                  }

                                                  break;
                                              default:
                                          }
                                      }
                                  }}
                            // 不允许文本域调整大小
                                  style={{resize: "none"}}
                        />
                    </Col>
                    <Col span={12} style={{maxHeight: "600px", overflowY: "scroll"}}>
                        <ReactMarkdown className={class_md_preview}
                                       children={content}
                                       remarkPlugins={[remarkGfm, remarkMath]}
                                       rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw, [rehypeHighlight, {
                                           detect: true,// 没有 language 属性的代码尝试自动解析语言类型
                                           ignoreMissing: true, // 出现故障不抛出异常打断页面渲染
                                           languages: {// 默认会装载部分语言，但手动更完整和准确
                                               bash,
                                               shell,
                                               dockerfile,
                                               nginx,
                                               javascript,
                                               typescript,
                                               java,
                                               python,
                                               sql,
                                               properties,
                                               json,
                                               xml,
                                               yaml
                                           }
                                       }]]}
                        />
                    </Col>
                </Row>
            )}
        </EditorContext.Consumer>
    );
}

export default EditorView;