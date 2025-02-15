import React from "react";
import { Nav,Col, Row, Tab  } from "react-bootstrap";
import Test_text from "../Components/test_text";

export default function Test_menu(){
    return(
        <>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row>
            <Col sm={2}>
                <Nav variant="pills" className="flex-column" >
                    <h3 >Менеджмент</h3>
                    <h4 >Уровень 1</h4>
                    <Nav.Item>
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
                        <Test_text/>
                        </Tab.Pane>
                    <Tab.Pane eventKey="second"><Test_text/></Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
    </>
        
    );
}