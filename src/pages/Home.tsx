import {useEffect} from 'react';
import {Col, Row} from "antd";

import '../styles/default.css'
import '../styles/index.less'
import '../styles/index.scss'

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
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
        </>
    );
}
