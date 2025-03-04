import React, { useState } from "react";
import { Row, Col, Button, Accordion, Form, Table, Dropdown, Container, Modal, Stack} from "react-bootstrap";

import Organize_form from "./organize_form";

export default function Block_info_form() {
    
    return (

    //   <Row>{listItems}</Row>
    <>
            <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" }} defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Спланировать аудит</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Форма для организации аудита</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                {/* Содержимое блока формы */}

                <Organize_form/>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>

           
            </>
    
    );
  }