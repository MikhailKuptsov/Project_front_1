import React from "react";
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

const fabrics = [
    { title: 'УЛРЗ'},
    { title: 'ЧЭРЗ'},
    { title: 'ВТРЗ'},
    { title: 'УУЛВРЗ'},
    { title: 'АТРЗ'},
    { title: 'ЯЭРЗ'},
    { title: 'ОЛРЗ'},
    { title: 'РЭРЗ'},
  ];

export default function Person_information_page(){
    const Cardstyle={width: '400px', marginBottom:"10px", maxHeight:'440px'};
    const listItems = fabrics.map( fabrics =>
        <Form.Check type="checkbox" label={fabrics.title} />
        ); 
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                </Card.Body>
                </Card>
            </Col>

            <Col>
            <Card style={Cardstyle}>
                <Card.Body>
                <Card.Title>Заводы:</Card.Title>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {listItems}
                    </Form.Group>
                </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={Cardstyle}>
                <Card.Body>
                <Card.Title>Разрешения:</Card.Title>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Разрешение на редактирование плановых занчений" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Разрешение на редактирование фактических занчений" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Разрешение на редактирование занчений всех месяцев" />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">Сохранить</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Form>
        </div>
        <UnderBar/>
        </>
    );
}