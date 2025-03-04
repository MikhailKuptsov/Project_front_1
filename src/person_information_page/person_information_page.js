import React from "react";
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";



export default function Person_information_page(){
    const Cardstyle={maxWidth: '500px', minWidth:'400px', marginBottom:"10px", };
    return(
        <>
        <Main_Header/>
        <div style={{marginRight:"4%", marginLeft:"4%", marginTop:"30px", marginBottom:"20px"}}>
        <Stack direction="horizontal" gap={3}>
            <div className="p-2"><h1>Профиль</h1></div>
            <div className="p-2 ms-auto"><Button variant="success">Сохранить</Button></div>
            <div className="p-2"><Button variant="danger">Удалить</Button></div>
            </Stack>
        
        <Form>
            <Row>
                <Col>
                <Card style={Cardstyle}>
                <Card.Body>
                <Card.Title>Информация:</Card.Title>
                    <Form.Group className="mb-3" >
                        <Form.Label>Фамилия:</Form.Label>
                        <Form.Control type='text' placeholder="Введите фамилию" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Имя:</Form.Label>
                        <Form.Control type='text' placeholder="Введите имя" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Отчество:</Form.Label>
                        <Form.Control type='text' placeholder="Введите отчество" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Должность:</Form.Label>
                        <Form.Control type='text' placeholder="Введите должность" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' placeholder="Введите email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                </Card.Body>
                </Card>
            </Col>

            
            
            <Col>
            <Card style={Cardstyle}>
                <Card.Body>
                <Card.Title>Разрешения:</Card.Title>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Админ" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Обычный пользователь" />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">Сохранить</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col></Col>
            </Row>
            </Form>
        </div>
        <UnderBar/>
        </>
    );
}