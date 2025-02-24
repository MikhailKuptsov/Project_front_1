import React from "react";

import { Nav,Col, Row, Tab, Tabs  } from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import Test_text from "../Components/test_text";


const test_data=[]


export default function One_test_page_v2(){
    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return(
        <>
        <Main_Header/>
        <div style={MyStyle}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column" >
                        <div style={{margin:"20px"}}>
                        <h2>УЛРЗ</h2>
                        <h3 >Менеджмент</h3>
                        <h4>Время на прохождение аудита:</h4>
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
    );
}