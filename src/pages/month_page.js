import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import { Stack, Card, Row,Col, Button } from "react-bootstrap";

const month_names = [
    { title: 'Январь',id:"1", test_link:'/Tests_page/test_1'},
    { title: 'Февраль',id:"2", test_link:'/Tests_page/test_2'},
    { title: 'Март',id:"3", test_link:'/Tests_page/test_3'},
    { title: 'Апрель',id:"4", test_link:'/Tests_page/test_4'},
    { title: 'Май',id:"5", test_link:'/Tests_page/test_5'},
    { title: 'Июнь',id:"6", test_link:'/Tests_page/test_6'},
    { title: 'Июль',id:"7", test_link:'/Tests_page/test_7'},
    { title: 'Август',id:"8", test_link:'/Tests_page/test_8'},
    { title: 'Сентябрь',id:"9", test_link:'/Tests_page/test_9'},
    { title: 'Октябрь',id:"10", test_link:'/Tests_page/test_10'},
    { title: 'Ноябрь',id:"11", test_link:'/Tests_page/test_11'},
    { title: 'Декабрь',id:"12", test_link:'/Tests_page/test_12'},
  ];

export default function Month_page() {

    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    const Cardstyle={ marginBottom:"10px", height:"150px",maxWidth:"400px", minWidth:"300px", marginLeft:"10px", marginRight:"10px",};
    const listItems = month_names.map( month_names =>
        <Col>
            <Card style={Cardstyle}>
                <Card.Body>
                    <Row>
                        <center>
                            <h4>{month_names.id}. {month_names.title}</h4>
                            </center>
                            </Row>
                        
                    <Row>
                        <center><Button 
                        variant="outline-dark" 
                        style={{width:"150px", marginLeft:"10px", marginTop:"10px"}} 
                        size="lg"
                        href={month_names.test_link}
                    >Выбрать</Button>
                    </center>
                    </Row>
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
                    <div className="p-2"><h1>Выберите месяц</h1></div>
                </Stack>
                <Row>{listItems}</Row>
                    
                </div>
            </div>
        <UnderBar/>
        </>
    );
};