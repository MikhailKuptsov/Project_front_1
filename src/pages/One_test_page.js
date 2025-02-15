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
                <Tab eventKey="home" title="Менеджмент" >
                    <Test_menu/>
                </Tab>
                <Tab eventKey="2" title="Подготовка производства">
                    Tab content for Home
                </Tab>
                <Tab eventKey="3" title="SF-m ручные операции">
                    Tab content for Home
                </Tab>
                <Tab eventKey="4" title="SF-е оборудование">
                    Tab content for Home
                </Tab>
                <Tab eventKey="5" title="Качество">
                    Tab content for Home
                </Tab>
                <Tab eventKey="6" title="ОТиБ">
                    Tab content for Home
                </Tab>
                <Tab eventKey="7" title="Цепочка поставок">
                    Tab content for Home
                </Tab>
                <Tab eventKey="8" title="Техническое развитие">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
    </div>
    <UnderBar/>
        </>
    );
}