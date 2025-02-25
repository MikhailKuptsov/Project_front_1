import React from "react";

//компоненты Bootstrap
import { Nav,Col, Row, Tab, Tabs  } from "react-bootstrap";

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
import Test_text from "./test_text";

const fabric_name="УЛРЗ";
const test_name="M1 Достижение ключевых показателей эффективности завода";
const time="";
const questions= [{
    label:"Пункт №1",
    task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    executor:"Директор по экономике и финансам ",
    date:"15.04.2024"
    }];

export default function One_test_page_v3({fabric_name, test_name, time, questions}){
    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return(
        <>
        {/* нужно сделать Навбар с предупреждением */}
        <Main_Header/>
        <div style={MyStyle}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
            {/* Боковая панель */}
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column" >
                        <div style={{margin:"20px"}}>
                        <h2>{fabric_name}</h2>
                        <h3 >{test_name}</h3>
                        <h4>Время на прохождение аудита:{time}</h4>
                        </div>
                        <Nav.Item >
                        <Nav.Link eventKey="first">M1 Достижение ключевых показателей эффективности завода</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">М2 Эталонный поток изготовления продукции</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <h2 style={{margin:"10px"}}>M1 Достижение ключевых показателей эффективности завода: </h2>
                            <Tabs
                                            defaultActiveKey="home"
                                            transition={false}
                                            id="fill-tab-example"
                                            className="mb-3"
                                            data-bs-theme="dark"
                                            fill
                                        >
                                            <Tab eventKey="home" title="Уровень 1" >
                                                <Test_text/>
                                            </Tab>
                                            <Tab eventKey="2" title="Уровень 2">
                                                <Test_text/>
                                            </Tab>
                                            <Tab eventKey="3" title="Уровень 3">
                                                <Test_text/>
                                            </Tab>
                                            <Tab eventKey="4" title="Уровень 4" variant="dark">
                                                <Test_text/>
                                            </Tab>
                                            <Tab eventKey="5" title="Уровень 5" >
                                                <Test_text/>
                                            </Tab>                                            
                                        </Tabs>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <h2 style={{margin:"10px"}}>М2 Эталонный поток изготовления продукции</h2>
                            Содержимое
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
        <UnderBar/>
        </>
    )
}