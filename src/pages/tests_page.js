import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import { Stack, Card, Row,Col, Button } from "react-bootstrap";


const tests_names = [
    { title: 'Достижение целевого показателя',id:"1", test_link:'/Month_page'},
    { title: 'Исполнение мероприятий по ДК ТОС',id:"2", test_link:'/Month_page'},
    { title: 'Уровень внедрения инструмента 5S',id:"3", test_link:'/Month_page'},
    { title: 'Внедрение TMP на заводе',id:"4", test_link:'/Month_page'},
    { title: 'Внедрение SMED на заводе',id:"5", test_link:'/Month_page'},
    { title: 'Внедрение COK на заводе',id:"6", test_link:'/Month_page'},
    { title: 'Проведение обучения',id:"7", test_link:'/Month_page'},
    { title: 'Кайдзен деятельность',id:"8", test_link:'/Month_page'},
    { title: 'Адаптация регламентов',id:"9", test_link:'/Month_page'},
    { title: 'Составление КПСЦ',id:"10", test_link:'/Month_page'},
    { title: 'Внедрение СВМ',id:"11", test_link:'/Month_page'},
    { title: 'Обмен опытом',id:"12", test_link:'/Month_page'},
    { title: 'ПСЗ',id:"13", test_link:'/Month_page'},
  ];

export default function Tests_page() {

    const MyStyle={minHeight:"700px",marginBottom:"30px"};
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
                <div style={{marginRight:"4%", marginLeft:"4%", marginTop:"30px"}}>
                <Stack direction="horizontal" >
                    <div className="p-2"><h1>Аудиты</h1></div>
                </Stack>
                <Row>{listItems}</Row>
                    
                </div>
            </div>
        <UnderBar/>
        </>
    );
};