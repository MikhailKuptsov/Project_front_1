import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Person_card from "../Components/Card_person";
import { Button, Row, Col, Form, FormControl, Dropdown } from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

const people=[
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
    { fabric_name: 'УЛРЗ', name_person: "Иванов Иван Иванович", link_url:"/Person_information_page"},
]


export default function Admin_page() {
    const listItems = people.map( people =>
            <Col><Person_card info={{name:people.name_person, fabric:people.fabric_name, link:people.link_url}}/></Col>
        );
        return (
            <div>
                <Main_Header/>
                <div style={{minHeight:"700px",marginBottom:"30px"}}>
                <div style={{width:"500px"}}>
                <Form style={{marginTop:"20px", marginLeft:"20px", marginBottom:"auto", marginRight:"auto"}}>
                    <Row>
                        <Col>
                            <FormControl type="text" placeholder="Введите пользователя" className="mr-sm-2"/>
                        </Col>
                        <Col>
                        <Button variant="outline-info" >Поиск</Button>
                        </Col>
                        
                    </Row>
                </Form>
                </div>
                <div>
                <Row>{listItems}</Row>
                </div>
                </div>
                <UnderBar/>
        </div>
        );    
};

