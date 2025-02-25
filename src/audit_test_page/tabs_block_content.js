import React from "react";
import Test_text from "./test_text";
import { Tab, Tabs } from "react-bootstrap";

export default function Tabs_block_content({test_text_value}){
    // const test_text_value=[
    //     {label:"Уровень 1", value:[
    //         {
    //             key_id:"1",
    //             label:"1",
    //             task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //             control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //             list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //             executor:"Директор по экономике и финансам ",
    //             date:"15.04.2024"
    //         },
    //         {
    //             key_id:"2",
    //             label:"2",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         },
    //         {
    //             key_id:"3",
    //             label:"3",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         }]
    //     },
    //     {label:"Уровень 2", value:[
    //         {
    //             key_id:"1",
    //             label:"1",
    //             task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //             control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //             list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //             executor:"Директор по экономике и финансам ",
    //             date:"15.04.2024"
    //         },
    //         {
    //             key_id:"2",
    //             label:"2",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         },
    //         {
    //             key_id:"3",
    //             label:"3",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         }]
    //     },
    // ];

    // const generic_task_text=test_text_value.map(a => 
    // <Tab eventKey={a.label} title={a.label} >
    //     <h4>{a.label}</h4>
    //     <Test_text questions={a.value}/>
    // </Tab>
    // );

    // const test_text_value={
    //     level_1:[
    //         {
    //             key_id:"1",
    //             label:"1",
    //             task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //             control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //             list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //             executor:"Директор по экономике и финансам ",
    //             date:"15.04.2024"
    //         },
    //         {
    //             key_id:"2",
    //             label:"2",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         },
    //         {
    //             key_id:"3",
    //             label:"3",
    //             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //             executor:"Заместитель директора завода (по качеству) ",
    //             date:"16.02.2024"
    //         }],
    //         level_2:[
    //             {
    //                 key_id:"1",
    //                 label:"1",
    //                 task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //                 control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //                 list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //                 executor:"Директор по экономике и финансам ",
    //                 date:"15.04.2024"
    //             },
    //             {
    //                 key_id:"2",
    //                 label:"2",
    //                 task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                 control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                 list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                 executor:"Заместитель директора завода (по качеству) ",
    //                 date:"16.02.2024"
    //             },
    //             {
    //                 key_id:"3",
    //                 label:"3",
    //                 task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                 control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                 list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                 executor:"Заместитель директора завода (по качеству) ",
    //                 date:"16.02.2024"
    //             }],
    //             level_3:[
    //                 {
    //                     key_id:"1",
    //                     label:"1",
    //                     task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //                     control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //                     list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //                     executor:"Директор по экономике и финансам ",
    //                     date:"15.04.2024"
    //                 },
    //                 {
    //                     key_id:"2",
    //                     label:"2",
    //                     task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                     control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                     list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                     executor:"Заместитель директора завода (по качеству) ",
    //                     date:"16.02.2024"
    //                 },
    //                 {
    //                     key_id:"3",
    //                     label:"3",
    //                     task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                     control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                     list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                     executor:"Заместитель директора завода (по качеству) ",
    //                     date:"16.02.2024"
    //                 }],
    //                 level_4:[
    //                     {
    //                         key_id:"1",
    //                         label:"1",
    //                         task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //                         control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //                         list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //                         executor:"Директор по экономике и финансам ",
    //                         date:"15.04.2024"
    //                     },
    //                     {
    //                         key_id:"2",
    //                         label:"2",
    //                         task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                         control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                         list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                         executor:"Заместитель директора завода (по качеству) ",
    //                         date:"16.02.2024"
    //                     },
    //                     {
    //                         key_id:"3",
    //                         label:"3",
    //                         task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                         control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                         list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                         executor:"Заместитель директора завода (по качеству) ",
    //                         date:"16.02.2024"
    //                     }],
    //                     level_5:[
    //                         {
    //                             key_id:"1",
    //                             label:"1",
    //                             task:"Цели завода определены на год в бизнес-плане. Оформлены в виде Х-матрице уровня L1 и соответствуют КПЭ завода в бизнес-плане.",
    //                             control_element:"Доклад Генерального директора по Х-Матрице и бизнес-плану (содокладчик - Директор по экономике и финансам).",
    //                             list_of_events:"Составить и утвердить X матрицу  уровня L1 на основе матрицы генерального директора  уровня L0.",
    //                             executor:"Директор по экономике и финансам ",
    //                             date:"15.04.2024"
    //                         },
    //                         {
    //                             key_id:"2",
    //                             label:"2",
    //                             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                             executor:"Заместитель директора завода (по качеству) ",
    //                             date:"16.02.2024"
    //                         },
    //                         {
    //                             key_id:"3",
    //                             label:"3",
    //                             task:"Цели завода визуализированы в доступной форме в виде 1 слайда/изображения и доведены до сотрудников завода при помощи заводских СМИ/КСЭД/электронной ",
    //                             control_element:"Просмотр Политики в области качества, операционной системы и технической безопасности.",
    //                             list_of_events:"Разместить цели завода на 2024 год в цеховых стендах и информационных досках завода, организовать рассылку и ознакомление с целями каждого работника.",
    //                             executor:"Заместитель директора завода (по качеству) ",
    //                             date:"16.02.2024"
    //                         }]

    //     }

    
       

    return(
        <>
                <Tabs
                    defaultActiveKey="Уровень 1"
                    transition={false}
                    id="fill-tab-example"
                    className="mb-3"
                    data-bs-theme="dark"
                    fill>
                    {/* {generic_task_text}*/}
                    {/* уровень 1 */}
                    <Tab eventKey="Уровень 1" title="Уровень 1" >
                         <h4>Уровень 1</h4>
                         <Test_text questions={test_text_value.level_1}/>
                    </Tab>
                    {/* Уровень 2 */}
                    <Tab eventKey="Уровень 2" title="Уровень 2" >
                         <h4>Уровень 2</h4>
                         <Test_text questions={test_text_value.level_2}/>
                    </Tab>
                    {/* Уровень 3 */}
                    <Tab eventKey="Уровень 3" title="Уровень 3" >
                         <h4>Уровень 3</h4>
                         <Test_text questions={test_text_value.level_3}/>
                    </Tab>
                    {/* Уровень 4 */}
                    <Tab eventKey="Уровень 4" title="Уровень 4" >
                         <h4>Уровень 4</h4>
                         <Test_text questions={test_text_value.level_4}/>
                    </Tab>
                    {/* Уровень 5 */}
                    <Tab eventKey="Уровень 5" title="Уровень 5" >
                         <h4>Уровень 5</h4>
                         <Test_text questions={test_text_value.level_5}/>
                    </Tab>

                </Tabs>
    </>
    );
    
}