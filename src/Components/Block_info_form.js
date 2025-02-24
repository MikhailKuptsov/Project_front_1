import React, { useState } from "react";
import { Row, Col, Button, Accordion, Form, Table, Dropdown, Container, Modal, Stack} from "react-bootstrap";
import fabrics_tests from "../Text_data/fabrics_list_data"; 
import tests_audit_names from "../Text_data/tests_audit_names";


export default function Block_info_form() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const list_of_checks_fabrics = fabrics_tests.map( fabrics_tests =>
        <option value="1">{fabrics_tests.title}</option>
            );
    const list_of_checks_tests_audit=tests_audit_names.map( a => <option>{a.title}</option> )
      
  
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
                {/* Содержимое блока */}
                <div style={{textAlign:"left"}}>
                  <Form>
                    <Form.Label>Выберите завод:</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>...</option>
                      
                      {list_of_checks_fabrics}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Дата начала аудита:</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Дата завершения:</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Сотрудник:</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>ФИО сотрудника</th>
                          <th>Раздел</th>
                          <th>Подраздел</th>
                          <th>Доступ к результатам</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" />
                          </Form.Group>
                          </td>
                          <td>
                          <Form.Select aria-label="Default select example">
                            <option>...</option>
                            {list_of_checks_tests_audit}
                          </Form.Select>
                          </td>
                          <td>
                          <Form.Group className="mb-3" >
                            <Form.Control type="text" />
                          </Form.Group>
                          </td>
                          <td>
                          <Form.Check type="checkbox" label="" />
                          </td>
                        </tr>
                        
                      </tbody>
                    </Table>
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-2"></div>
                      <div className="p-2 ms-auto">
                      
                      </div>
                      <div className="p-2">
                      <Button variant="outline-success" >
                          Добавить аудитора
                        </Button>
                        </div>
                    </Stack>
                    <Button variant="outline-dark" onClick={handleShow}>
                          Организовать аудит
                        </Button>
                    
                    
                    
                </Form>
              </div>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>

            {/* предупреждающее окно */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Подтверждение</Modal.Title>
              </Modal.Header>
              <Modal.Body>Организовать аудит?</Modal.Body>
              <Modal.Footer>
                <Button variant='success' onClick={handleClose}>
                  Да, организовать
                </Button>
              </Modal.Footer>
            </Modal>
            </>
    
    );
  }