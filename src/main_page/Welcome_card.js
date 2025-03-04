import { Card } from "react-bootstrap"


export default function Welcome_card(){
    
    return(
        <>
        <Card style={{width:"auto", marginLeft:"10%", marginRight:"10%", marginTop:"50px"}}>
            <Card.Body>
                <h2>Добро пожаловать </h2>
            </Card.Body>
        </Card>
        </>
    )
}