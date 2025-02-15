
import React, { Component } from "react";
import logo from './logo1.png'
import { Navbar, Nav, NavLink, Container,  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


export default class Header extends Component {
    render(){
        return(
            <>
            {/* fixed="top" - прибить navbar на верхрей части сайта постоянно*/}
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    {/* Кнопка которая будет появляться после уменьшения экрана */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="/">Auth_page</NavLink>
                            <NavLink href="/Main_page">Main_page</NavLink>
                            <NavLink href="/Admin_page">Admin_page</NavLink>
                            <NavLink href="/Person_information_page">Person_information_page</NavLink>
                            <NavLink href="/Tests_page">Tests_page</NavLink>
                            <NavLink href="/Month_page">Month_page</NavLink> 
                            <NavLink href="/Tests_page/test_1">Segments_test</NavLink>
                            <NavLink href="/Dashboard_page">Dashboard_page</NavLink>
                            <NavLink href="/Creating_test_page">Creating_test_page</NavLink>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
} 

