import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import { Stack, Card, Row,Col, Button } from "react-bootstrap";

const tests_names = [
    { title: 'Менеджмент',id:"1", test_link:'/Creating_test_page'},
    { title: 'Подготовка производства',id:"2", test_link:'/Creating_test_page'},
    { title: 'SF-m Ручные операции',id:"3", test_link:'/Creating_test_page'},
    { title: 'SF-e оборудование',id:"4", test_link:'/Creating_test_page'},
    { title: 'ОТиБ',id:"5", test_link:'/Creating_test_page'},
    { title: 'Качество',id:"6", test_link:'/Creating_test_page'},
    { title: 'Техническое развитие',id:"7", test_link:'/Creating_test_page'},
  ];

export default function Edit_test_page(){
    const MyStyle={minHeight:"700px",margin:"40px"};
    const Cardstyle={ marginBottom:"10px", height:"150px",maxWidth:"400px", minWidth:"300px", marginLeft:"10px", marginRight:"10px",};
    
    const listItems = tests_names.map( tests_names =>
        <Col>
            <Card style={Cardstyle}>
                <Card.Body>
                    <Row><h4>{tests_names.id}. {tests_names.title}</h4></Row>
                    <Row><Button 
                        variant="outline-dark" 
                        style={{width:"150px", marginLeft:"10px", marginTop:"10px"}} 
                        size="lg"
                        href={tests_names.test_link}
                    >Выбрать</Button></Row>
                    </Card.Body>
            </Card>
        </Col>
    );

    return (
        <>
        <Main_Header/>
        <div style={MyStyle}>
            <h2>Страница Редактирования теста</h2>
            <div style={{marginRight:"4%", marginLeft:"4%", marginTop:"30px"}}>
                <Stack direction="horizontal" >
                    
                </Stack>
                <Row>{listItems}</Row>
                    
                </div>

        </div>
        <UnderBar/>
        </>
        
    );
};
