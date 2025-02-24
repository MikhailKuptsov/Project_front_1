import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
import Person_card from "../Components/Card_person";

// data files
import people from "../Text_data/people_list_data";



export default function Admin_page() {
    const listItems = people.map( people =>
            <Col><Person_card info={{name:people.name_person, fabric:people.fabric_name, link:people.link_url}}/></Col>
        );
        return (
            <div>
                <Main_Header/>
                <div style={{minHeight:"700px",margin:"20px"}}>
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
                <div style={{margin:'20px'}}>
                <Button variant="outline-dark" href="/Person_information_page" size="lg">
                        Создать пользователя
                    </Button>
                </div>
                <div>
                <Row>{listItems}</Row>
                </div>
                </div>
                <UnderBar/>
        </div>
        );    
};

