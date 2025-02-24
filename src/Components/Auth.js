import React, { Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button,  Form, Card, Stack } from "react-bootstrap";
import Example from "./warning";
import train_image from "../Images/trainy.png"




export default function Auth(){
    const [capsLockActive, setCapsLockActive] = useState(false);

    const handleKeyDown = (event) => {
      setCapsLockActive(event.getModifierState('CapsLock'));
    };
        return(
            <div style={{marginTop:"200px"}}>
                 <Stack gap={2} className="col-md-5 mx-auto">
                <Card style={{ width: '300px', marginLeft:"auto", marginRight:"auto" }}>
                <Card.Body>
                    <h3>Аутентификация</h3>
                    <Form >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Логин:</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин(email)..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." id="password" onKeyDown={handleKeyDown} onKeyUp={handleKeyDown}/>
                    {capsLockActive && (
                        <p style={{ color: 'red' }}>*У вас нажат CapsLock</p>
                    )}
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