import React from "react";
import { Row, Col, Button, Accordion  } from "react-bootstrap";



export default function Block_info_1({info, fabrics}) {
    const listItems = fabrics.map( fabrics =>
        <Col><Button variant="dark" style={{marginTop:"10px"}} size="lg" href={fabrics.pageLink}>{fabrics.title}</Button></Col>
    );  
    return (

    //   <Row>{listItems}</Row>
    <>
            <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" }} defaultActiveKey="0">
            <Accordion.Item eventKey={info.item_key}>
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