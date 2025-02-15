import React from "react";
import { Accordion, Button, Dropdown,Row,Col, Form } from "react-bootstrap";

export default function Test_text(){
    return(
        <>
        <h4>M1 Достижение ключевых показателей эффективности завода: </h4>
        <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0">
            <Accordion.Header>Задача №1</Accordion.Header>
            <Accordion.Body>
                <p>
                Требование дорожной карты ПС ЖДРМ. Как достичь (How): 
                Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.
                --------
                Контрольный элемент. Метод контроля:
                Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).
                -----
                Список мероприятий мероприятий на 2024 г. :
                Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.
                </p>
                <p>
                Исполнитель: Директор по экономике и финансам 
                </p>
                <p>Срок: 15.04.2024</p>
                <div style={{width:"130px"}}>
                    <Row>
                        <Col><p>Ответ:</p></Col>
                        <Col><Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Да
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">да</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">нет</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Col>
                    </Row>
                </div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Выберете файл:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                    
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Задача №1</Accordion.Header>
            <Accordion.Body>
                <p>
                Требование дорожной карты ПС ЖДРМ. Как достичь (How): 
                Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.
                --------
                Контрольный элемент. Метод контроля:
                Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).
                -----
                Список мероприятий мероприятий на 2024 г. :
                Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.
                </p>
                <p>
                Исполнитель: Директор по экономике и финансам 
                </p>
                <p>Срок: 15.04.2024</p>
                <div style={{width:"130px"}}>
                    <Row>
                        <Col><p>Ответ:</p></Col>
                        <Col><Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Да
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">да</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">нет</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Col>
                    </Row>
                </div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Выберете файл:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                    
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    );
}