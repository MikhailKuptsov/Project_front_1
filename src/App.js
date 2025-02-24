import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Admin_page from './pages/admin_page';
import Auth_page from './pages/auth_page';
import Main_page from './pages/main_page';
import Dashboard_page from './pages/dashboard_page';
import Creating_test_page from './pages/creating_test_page';
import Tests_page from './pages/tests_page';
import Person_information_page from './pages/person_information_page';
import Month_page from './pages/month_page';
import Segments_test from './pages/Segmetts_test_pages';
import One_test_page from './pages/One_test_page';
import One_test_page_v2 from './pages/One_test_page_v2';
import Checking_audits_page from './pages/Checking_audits_page';



function App() {
  return(
    <Router>
                    {/* Рабочий навбар */}
                    <Header />
                    {/* Переключение на страницы */}
                      <Routes>
                        {/* Ссылка на Страницу аутентификации */}
                          <Route exact path="/" element={<Auth_page />} />
                        {/* Ссылка на главную страницу */}
                          <Route exact path="/Main_page" element={<Main_page />} />
                          {/* страница админа */}
                          <Route exact path="/Admin_page" element={<Admin_page />} />
                          {/* страница дашборда */}
                          <Route exact path="/Dashboard_page" element={<Dashboard_page />} />
                          {/* страница создания теста */}
                          <Route exact path="/Creating_test_page" element={<Creating_test_page />} />
                          {/* <Route exact path="/Tests_page" element={<Tests_page />} />
                          <Route exact path="/Month_page" element={<Month_page />} /> */}
                          {/* страница с личными данными пользователей */}
                          <Route exact path="/Person_information_page" element={<Person_information_page />} />
                          {/* Страница с тестом версия 1 */}
                          <Route exact path='/Tests_page/test_1' element={<Segments_test/>}/>
                          {/* Страница с тестом версия 2 */}
                          <Route exact path='/test_page_1' element={<One_test_page/>}/>
                          {/* страница с тестом версия 3 - основная*/}
                          <Route exact path='/test_page_v2' element={<One_test_page_v2/>}/>
                          {/* Страница проверки назначенных аудитов */}
                          <Route exact path='/Checking_audits_page' element={<Checking_audits_page/>}/>
          
                      </Routes>
                  </Router>
  )
}

export default App;
