import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Form, Button, Container, Row, Col, Stack, Modal  } from "react-bootstrap";
//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

export default function Checking_audits_page(){

    const [showDelete, setShowDelete] = useState(false);
    
      


        const handleCloseDelete = () => setShowDelete(false);
        const handleShowDelete = () => setShowDelete(true);
    const MyStyle={minHeight:"700px",margin:"20px"};
    return(
        <>
        <Main_Header/>
        <div style={MyStyle}>
        <h1>Страница всех назначенных аудитов</h1>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2"></div>
                <div className="p-2 ms-auto"></div>
                <div className="p-2"><Button variant="outline-danger" size="md" onClick={handleShowDelete}>Удалить выбранное</Button></div>
            </Stack>
            
                <Table striped bordered hover >
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Завод</th>
                            <th>Дата проведения</th>
                            <th>Сотрудник</th>
                            <th>Раздел</th>
                            <th>Доступ к результатам</th>
                            <th>Оценка</th>
                            <th>Информация об аудите</th>
                            <th>Удалить из истории</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    УЛРЗ
                                </td>
                                <td>
                                12.03.2024
                                </td>
                                <td>
                                Иванов Иван Иванович
                                </td>
                                <td>
                                Менеджмент
                                </td>
                                <td>
                                Есть
                                </td>
                                <td>1.13</td>
                                <td>
                                <Button href="/test_page_v2">Посмотреть</Button>
                                </td>
                                <td>
                                <Form.Check type="checkbox" label="" />
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
        </div>
        <UnderBar/>  


            {/* предупреждающее окно */}
            <Modal show={showDelete} onHide={handleCloseDelete}>
              <Modal.Header closeButton>
                <Modal.Title>Подтверждение</Modal.Title>
              </Modal.Header>
              <Modal.Body>Вы точно хотите удалить выбранные аудиты?</Modal.Body>
              <Modal.Footer>
                <Button variant='danger' onClick={handleCloseDelete}>
                  Да, удалить
                </Button>
              </Modal.Footer>
            </Modal>   
        </>
    )
}