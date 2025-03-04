import React from 'react';
import management_category from '../tests_data_text/management_data';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import One_test_page_v3 from '../audit_test_page/One_test_page_v3';

export default function Connection_to_audits(){
    return(
        <>
        <Router>
              {/* Переключение на страницы */}
              <Routes>
                      
                {/* страница с тестом версия 3 - основная*/}
                <Route exact path='/test_page_v2/test_1/' element={<One_test_page_v3 fabric_name="УЛРЗ" 
                                                                        test_name="M1 Достижение ключевых показателей эффективности завода"
                                                                        time="12.01.2021 12:00"
                                                                        category={management_category}/>}/>
                {/* <Route exact path='/test_page_v2/test_2/' element={<One_test_page_v3/>}/>
                <Route exact path='/test_page_v2/test_3/' element={<One_test_page_v3/>}/> */}
              </Routes>
            </Router>
        </>
    )
}