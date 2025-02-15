import React from "react";
import { Row, Col, Button, Accordion, Form, Table, Dropdown } from "react-bootstrap";



export default function Block_info_form() {
  
    return (

    //   <Row>{listItems}</Row>
    <>
            <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" }} defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Спланировать аудит</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>форма для организации аудита</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Row>
                <Form>
                    
                </Form>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>
            </>
    
    );
  }