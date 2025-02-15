import React from "react";
import { Row, Col, Button,  } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const fabrics = [
    { title: 'УЛРЗ', pageLink: "/Dash1", id: 1 },
    { title: 'ЧЭРЗ', pageLink: "/Dash2", id: 2 },
    { title: 'ВТРЗ', pageLink: "/Dash3", id: 3 },
    { title: 'УУЛВРЗ', pageLink: "/Dash4", id: 4 },
    { title: 'АТРЗ', pageLink: "/Dash5", id: 5 },
    { title: 'ЯЭРЗ', pageLink: "/Dash6", id: 6 },
    { title: 'ОЛРЗ', pageLink: "/Dash7", id: 7 },
    { title: 'РЭРЗ', pageLink: "/Dash8", id: 8 },
  ];

export default function Fabrics_buttons_List({info}) {
    const listItems = fabrics.map( fabrics =>
        <Col><Button variant="dark" style={{marginTop:"10px"}} size="lg">{fabrics.title}</Button></Col>
    );  
    return (

    //   <Row>{listItems}</Row>
    <>
            <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"auto", marginRight:"auto" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>{info.label}</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>{info.text_info}</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Row>{listItems}</Row>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>
            </>
    
    );
  }