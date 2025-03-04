import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


import test_data from '../tests_data_text/management.json'

import Auth_page from "../auth_page/auth_page";
import Main_page from '../main_page/main_page';
  
import Admin_page from '../admin_page/admin_page';
import Person_information_page from '../person_information_page/person_information_page';
  
import One_test_page_v3 from '../audit_test_page/One_test_page_v3';
import Checking_audits_page from '../checking_audit_page/Checking_audits_page';
  
import Creating_test_page from '../creating_test_page/creating_test_page';
import Edit_test_page from '../edit_test_page/edit_test_page';
import Delete_test_page from '../delete_test_page/delete_test_page';

const connections_links=[
    // Ссылка на Страницу аутентификации
    {path_link:"/", componet_page:<Auth_page/> },
    // Ссылка на главную страницу
    {path_link:"/Main_page", componet_page:<Main_page /> },
    // страница админа
    {path_link:"/Admin_page", componet_page:<Admin_page/> },
    // страница с личными данными пользователей
    {path_link:"/Person_information_page", componet_page:<Person_information_page/> },
    // страница с тестом версия 3 - основная

    // {path_link:"/test_page_v2/management", componet_page:<One_test_page_v3 
    //                                                 fabric_name="УЛРЗ" 
    //                                                 test_name="M1 Достижение ключевых показателей эффективности завода"
    //                                                 time="12.01.2021 12:00"
    //                                                 category={test_data.managment_data}/> },
    
    {path_link:"/test_page_v2/management/:fabric_name_2/:audit_name/:time_2",componet_page:<One_test_page_v3 category={test_data.managment_data}/>},

    // Страница проверки назначенных аудитов
    {path_link:"/Checking_audits_page", componet_page:<Checking_audits_page/> },
    // страница создания теста
    {path_link:"/Creating_test_page", componet_page:<Creating_test_page/> },
    // Страница редактирования теста
    {path_link:"/Edit_test_page", componet_page:<Edit_test_page/> },
    // Страница Удаления теста
    {path_link:"/Delete_test_page", componet_page:<Delete_test_page/> },
  
  ]

export default function Connections_links(){
    const list_of_route=connections_links.map(a=> <Route exact path={a.path_link} element={a.componet_page} />)
    return(
        <>
        <Router>
              {/* Рабочий навбар */}
              {/* <Header /> */}
              {/* Переключение на страницы */}
              <Routes>
                {list_of_route}
              </Routes>
            </Router>
        </>
    )
}