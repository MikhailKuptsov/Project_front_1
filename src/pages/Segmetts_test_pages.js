import React from "react";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import CarouselList from "../Components/CarouselList";
import light_orange from '../Images/light_orange.png';
import light_blue from '../Images/light_blue.png';
import light_green from '../Images/light_green.png';
import pink from '../Images/pink.png';
import violet from '../Images/violet.png'

const level_icon_1=[
    {title:"1", color_back: pink, test_link:"/test_page_1"},
    {title:"2", color_back: violet, test_link:"/test_page_1"},
    {title:"3", color_back: light_blue, test_link:"/test_page_1"},
    {title:"4", color_back: light_orange, test_link:"/test_page_1"},
    {title:"5", color_back: light_green, test_link:"/test_page_1"},
]
export default function Segments_test(){
    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return(
        <>
        <Main_Header/>
        <div style={MyStyle}>
            <CarouselList info={{label:"Выберите уровень"}} level_icon={level_icon_1}/>
        </div>
        <UnderBar/>
        </>
    );
}