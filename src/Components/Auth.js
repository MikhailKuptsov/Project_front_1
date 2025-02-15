import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,  Form, Card, Stack } from "react-bootstrap";
import Example from "./warning";


export default class Auth extends Component{
    render(){
        return(
            <div style={{marginTop:"200px"}}>
                 <Stack gap={2} className="col-md-5 mx-auto">
                <Card style={{ width: '300px', marginLeft:"auto", marginRight:"auto" }}>
                <Card.Body>
                    <h3>Аутентификация</h3>
                    <Form >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Логин:</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." />
                </Form.Group>
                <Button variant="outline-success" size="md" type="submit" href="/Main_page">
                    Войти
                </Button>
                <div style={{marginTop:"10px"}}>
                <Example/>
                </div>
                </Form>
                
                </Card.Body>
                </Card>
                </Stack>
            </div>
        )
    }
}