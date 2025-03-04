import React from "react";
import { Row, Col, Button, Accordion, Form, Table, Dropdown } from "react-bootstrap";



export default function Block_planned_audits() {
  
    return (

    //   <Row>{listItems}</Row>
    <>
            <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" }} defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Все аудиты</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Список всех спланированных аудитов</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                {/* Содержимое блока */}
                <Row>
                <Button size="lg" href="/Checking_audits_page" variant="outline-dark" >Выбрать</Button>
                </Row>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>
            </>
    
    );
  }