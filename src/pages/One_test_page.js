import React from "react";
import { Tab, Tabs} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import Test_menu from "../Components/Test_menu";


export default function One_test_page(){
    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return(
        <>
        <Main_Header/>
        <div style={MyStyle}>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="fill-tab-example"
                className="mb-3"
                data-bs-theme="dark"
                fill
            >
                <Tab eventKey="home" title="M1 Достижение ключевых показателей эффективности завода" >
                    <Test_menu/>
                </Tab>
                <Tab eventKey="2" title="М2 Эталонный поток изготовления продукции">
                    Tab content for Home
                </Tab>
                <Tab eventKey="3" title="M3 Культура производства (корпоративная культура) и 5С">
                    Tab content for Home
                </Tab>
                <Tab eventKey="4" title="М4.1 Оценка компетенций персонала">
                    Tab content for Home
                </Tab>
                <Tab eventKey="5" title="М4.2 Обучение сотрудников">
                    Tab content for Home
                </Tab>
                <Tab eventKey="6" title="М5 Конкурс по ПС и обмен опытом">
                    Tab content for Home
                </Tab>
                <Tab eventKey="7" title="М6 Операционная деятельность">
                    Tab content for Home
                </Tab>
                <Tab eventKey="8" title="M7 Реакционная способность ">
                    Tab content for Home
                </Tab>
                <Tab eventKey="2" title="M8 Постоянные улучшения (кайдзен)">
                    Tab content for Home
                </Tab>
                
            </Tabs>
    </div>
    <UnderBar/>
        </>
    );
}