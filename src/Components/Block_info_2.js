import React from "react";
import { Row, Col, Button, Accordion  } from "react-bootstrap";

import fabrics_tests from "../Text_data/fabrics_list_data";

const person_test = [
    { title: 'Менеджмент', pageLink: "/test_page_v2" },
    { title: 'Подготовка производства', pageLink: "/test_menejment"},
    { title: 'SF-m Ручные операции', pageLink: "/test_menejment"},
    { title: 'SF-e оборудование', pageLink: "/test_menejment"},
    { title: 'ОТиБ', pageLink: "/test_menejment"},
    { title: 'Качество', pageLink: "/test_menejment" },
    { title: 'Техническое развитие', pageLink: "/test_menejment"},
  ];


export default function Block_info_2(){
    const listItemsButtons = person_test.map( person_test =>
            <Row><Button style={{marginTop:"10px"}} href={person_test.pageLink} variant="outline-dark" size="lg">{person_test.title}</Button></Row>
        );

    const listItemsCards = fabrics_tests.map( fabrics_tests =>
        <Accordion.Item eventKey={fabrics_tests.id_item}>
            <Accordion.Header>
                <h4>{fabrics_tests.title}</h4>
            </Accordion.Header>
            <Accordion.Body>
                {listItemsButtons}
            </Accordion.Body>
        </Accordion.Item>
    );
    return(
        <>
        <center>
            <Accordion style={{maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" }} defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Col>
                            <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Мои аудиты</h2></Row>
                            <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Подзаголовок</p></Row> 
                        </Col>
                    </Accordion.Header >
                    <Accordion.Body >
                        <Row>
                            <Accordion defaultActiveKey="0">
                                {listItemsCards}
                            </Accordion>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </center>
        </>
    );
}