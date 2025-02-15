import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main_Header from "../Components/Main_Header";
import Fabrics_buttons_List from "../Components/Block_info_2";
import Big_button from "../Components/Big_button";
import Block_info_1 from "../Components/Block_info_1";
import UnderBar from "../Components/UnderBar";

const fabrics_auth = [
    { title: 'УЛРЗ', pageLink: "/Tests_page"},
    { title: 'ЧЭРЗ', pageLink: "/Tests_page" },
    { title: 'ВТРЗ', pageLink: "Tests_page" },
    { title: 'УУЛВРЗ', pageLink: "/Tests_page"},
    { title: 'АТРЗ', pageLink: "/Tests_page"},
    { title: 'ЯЭРЗ', pageLink: "/Tests_page"},
    { title: 'ОЛРЗ', pageLink: "/Tests_page" },
    { title: 'РЭРЗ', pageLink: "/Tests_page"},
  ];

const fabrics_dash = [
    { title: 'УЛРЗ', pageLink: "/Dashboard_page"},
    { title: 'ЧЭРЗ', pageLink: "/Dashboard_page" },
    { title: 'ВТРЗ', pageLink: "/Dashboard_page" },
    { title: 'УУЛВРЗ', pageLink: "/Dashboard_page"},
    { title: 'АТРЗ', pageLink: "/Dashboard_page"},
    { title: 'ЯЭРЗ', pageLink: "/Dashboard_page"},
    { title: 'ОЛРЗ', pageLink: "/Dashboard_page" },
    { title: 'РЭРЗ', pageLink: "/Dashboard_page"},
  ];

  const fabrics_tests = [
    { title: 'УЛРЗ', pageLink: "/Data_page"},
    { title: 'ЧЭРЗ', pageLink: "/Data_page" },
    { title: 'ВТРЗ', pageLink: "Data_page" },
    { title: 'УУЛВРЗ', pageLink: "/Data_page"},
    { title: 'АТРЗ', pageLink: "/Data_page"},
    { title: 'ЯЭРЗ', pageLink: "/Data_page"},
    { title: 'ОЛРЗ', pageLink: "/Data_page" },
    { title: 'РЭРЗ', pageLink: "/Data_page"},
  ];




export default class Main_page extends Component{
    render(){
        return (
            <>
            <div style={{minHeight:"700px",marginBottom:"30px"}}>
            <Main_Header/>
            <Block_info_1 info={{label:'Аудит', text_info:'Прохождение ежемесячного аудита',item_key:"1"}} fabrics={fabrics_auth} />
            <Block_info_1 info={{label:'Дашборд', text_info:'Формирование и изменение плановых и фактических показаний сотрудниками заводов и начальниками отдела',item_key:"2"}} fabrics={fabrics_dash} />
            <Block_info_1 info={{label:'Проверка данных', text_info:'Проверка данных после прохождения аудитов',item_key:"3"}} fabrics={fabrics_tests} />
            
            {/* <Fabrics_buttons_List info={{label:'Дашборд', text_info:'Формирование и изменение плановых и фактических показаний сотрудниками заводов и начальниками отдела'}}/>
            <Fabrics_buttons_List info={{label:'Проверка данных', text_info:'Формирование и изменение плановых и фактических показаний сотрудниками заводов и начальниками отдела'}}/> */}
            <Big_button info={{label:"Редактирование тестов", text_info:'Редактирование и создание новых аудитов'}}/>
            </div>
            <UnderBar/>
            </>
        );
    }
};
