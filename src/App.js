import React from 'react';
import Header from './Components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Auth_page from './auth_page/auth_page';
import Main_page from './main_page/main_page';

import Admin_page from './admin_page/admin_page';
import Person_information_page from './person_information_page/person_information_page';

import One_test_page_v2 from './audit_test_page/One_test_page_v3';
import Checking_audits_page from './checking_audit_page/Checking_audits_page';

import Creating_test_page from './creating_test_page/creating_test_page';
import Edit_test_page from './edit_test_page/edit_test_page';
import Delete_test_page from './delete_test_page/delete_test_page';

// import Tests_page from './pages/tests_page';

// import Month_page from './pages/month_page';
// import Segments_test from './pages/Segmetts_test_pages';
// import One_test_page from './pages/One_test_page';




function App() {
  return (
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
        {/* страница с личными данными пользователей */}
        <Route exact path="/Person_information_page" element={<Person_information_page />} />

        {/* страница с тестом версия 3 - основная*/}
        <Route exact path='/test_page_v2' element={<One_test_page_v2/>}/>
        {/* Страница проверки назначенных аудитов */}
        <Route exact path='/Checking_audits_page' element={<Checking_audits_page/>}/>

        {/* страница создания теста */}
        <Route exact path="/Creating_test_page" element={<Creating_test_page />} />
        {/* Страница редактирования теста */}
        <Route exact path="/Edit_test_page" element={<Edit_test_page />} />
        {/* Страница Удаления теста */}
        <Route exact path="/Delete_test_page" element={<Delete_test_page />} />
      </Routes>
    </Router>
  );
}

export default App;
