import {useEffect} from 'react';
import {Col, Row} from "antd";

import '../styles/default.css'
import '../styles/index.less'
import '../styles/index.scss'

import logoImage from "../assets/hero.png"

export interface HomeProps {
    readonly text: string
}

export default function Home({text}: HomeProps) {

    useEffect(() => {
        // 依赖静态值表示仅初始化时调用一次
        console.log(text)
    }, [text]);

    return (
        <>
            <Row>
                <img style={{margin: "0 auto"}} src={logoImage} alt={"logo"}></img>
            </Row>
            <Row gutter={[0, 0]}>
                <Col span={8}>
                    <div className="text1">
                        css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[0, 0]}>
                <Col span={8}>
                    <div className="text1">
                        css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[0, 0]}>
                <Col span={8}>
                    <div className="text1">
                        css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        scss
                    </div>
                </Col>
            </Row>
        </>
    );
}
