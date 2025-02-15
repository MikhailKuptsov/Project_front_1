import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import Chart_v2 from "../Components/chart_v2";
import { Card, Stack } from "react-bootstrap";



export default function Dashboard_page(){
    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return (
        <div>
            <Main_Header/>
            <div style={MyStyle}>
            <Stack direction="horizontal" >
                    <div className="p-2"><h1>Страница дашборда</h1></div>
                </Stack>
                <Card >
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Chart_v2/>
                    <Chart_v2/>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            <UnderBar/>
        </div>
    );
};