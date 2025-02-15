import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import image2 from '../Images/blue.png';

export default function Person_card({info}){
        return (
          <div style={{ marginTop:"20px",marginLeft:"20px",marginRight:"20px",marginBottom:"20px", maxWidth:"400px", minWidth:"300px", height:"150px"}}>
            <Card >
              {/* <Card.Img variant="top" src={image2} /> */}
              <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>
                  <p size="lg">{info.fabric}</p>
                </Card.Text>
                <Button variant="outline-dark" href={info.link}>Редактировать профиль</Button>
              </Card.Body>
            </Card>
            </div>
          );
    }
  
