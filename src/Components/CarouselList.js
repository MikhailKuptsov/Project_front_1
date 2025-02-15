import React, { useState } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';



export default function CarouselList ({info, level_icon}){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };    
    const Carousel_Style={ display: 'block', minWidth:'500px', maxWidth:"900px", padding: 30, marginRight:"auto", marginLeft:"auto" };
    const Text_Style={color:"black"};
    const listItems = level_icon.map( level_icon =>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={level_icon.color_back}
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <h3 style={Text_Style}>Уровень №{level_icon.title}</h3>
                            <p style={Text_Style}>Образец</p>
                            <Button variant="outline-dark" size="lg" href={level_icon.test_link}>Выбрать</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

    );
    return(
            <>
            <div style={Carousel_Style}>
                <h2>{info.label}</h2>
                
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {listItems}
                </Carousel>
            </div>
            
            </>
        );
    }