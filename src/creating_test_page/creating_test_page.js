import React from "react";
import { Accordion , Card, Button, Form, Row, Col, Stack } from "react-bootstrap";

//иконки
//корзина
import { CgTrash } from "react-icons/cg";



import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";


export default function Creating_test_page(){

    const MyStyle={minHeight:"700px",margin:"40px"};
    const Block_style={minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" };
    const Button_style={margin:'2%'};

    return (
        <>
        <Main_Header/>
        <div style={MyStyle}>
            <h2>Создать новый аудит</h2>
            {/* Расположение карточки */}
            {/* Этап 1 название теста */}
            <Card style={Block_style}>
                <Card.Body>
                    <h2>1. Назовите тест:</h2>
                    {/* <input type="text" placeholder="Введите название теста"/> */}
                    <Form.Group className="mb-3" controlId="1">
                      <Form.Label>Введите название теста аудита:</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                </Card.Body>
            </Card>

            {/* Этап 2 создание содержимого теста */}
            <Card style={Block_style}>
                <Card.Body>
                <Stack direction="horizontal" gap={3}>
                    <div className="p-2"><h2>2. Назовите подраздел и введите содержимое:</h2></div>
                    <div className="p-2 ms-auto"> <CgTrash size={"30px"}/></div>
                </Stack>
                    {/* <input type="text" placeholder="Введите название теста"/> */}
                    <Form.Group className="mb-3" controlId="2">
                      <Form.Label>Введите название подраздела:</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h4>Уровень 1</h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card>
                                    <Card.Header>
                                    <h5>Пункт 1</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>

                                <Button variant="outline-dark" size="md" style={{margin:"10px"}}>
                                    Создать пункт
                                </Button> <br/>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Card.Body>
            </Card>
            

            <Button variant="outline-dark" size="lg" style={Button_style}>
                Создать подраздел
            </Button> <br/>

            <Button variant="outline-success" size="lg" style={Button_style}>
                Завершить
            </Button>
            

        </div>
        <UnderBar/>
        </>
    );
};

