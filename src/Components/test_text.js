import React, {useState} from "react";
import { Accordion, Button, Dropdown,Row,Col, Form, Modal } from "react-bootstrap";


export default function Test_text(){
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <h4>Уровень №1</h4>
        <div style={{margin:'5px'}}><Button variant="outline-dark">Выгрузка теста в виде таблицы excel</Button></div>
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="1">
                <Accordion.Header>Пункт №1</Accordion.Header>
                <Accordion.Body>
                    <h6>Требование дорожной карты ПС ЖДРМ. Как достичь (How):</h6>
                    <p> 
                    Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.
                    </p>
                    <h6>Контрольный элемент. Метод контроля:</h6>
                    <p>
                    Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).
                    </p>
                    <h6>Список мероприятий мероприятий на 2024 г. :</h6>
                    <p>
                    Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.
                    </p>
                    
                        <h6>Исполнитель:</h6>
                        <p>
                     Директор по экономике и финансам 
                    </p>
                    <h6>Срок:</h6>
                    <p> 15.04.2024</p>
                    <div style={{width:"130px"}}>
                        <Row>
                            {/* <Col><p>Ответ:</p></Col>
                            <Col><Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Да
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">да</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">нет</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></Col> */}
                        </Row>
                    </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Ответ:</Form.Label>
                        <Form.Select aria-label="Default select example" style={{width:"200px"}}>
                            <option value="no">Нет</option>
                            <option value="yes">Да</option>
                        </Form.Select>
                        <Form.Label>Выберите файл:</Form.Label>
                        <Form.Control type="file" />
                        <Form.Label>Комментарий</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    
                        
                </Accordion.Body>
            </Accordion.Item>
            <div style={{margin:'5px'}}>
            <Button variant="outline-dark" onClick={handleShow} size="lg">
                Сохранить уровень
              </Button>
            </div>
            
        </Accordion>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы уверены?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы уверены, что хотите закрыть уровень?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            да
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}