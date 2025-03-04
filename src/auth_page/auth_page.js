import React, { Component } from "react";
import Auth from "./Auth";
// import '../styles/styles_auth.css'

//CSS styles
import "../CSS_styles/main_page/main_page_style.css"


// export default class Auth_page extends Component{
//     render(){
//         return (
//             <div >
//                 <Auth />
//             </div>
//         );
//     }
    
// };
export default function Auth_page(){
    return(
        <div >
            <Auth/>
        </div>
    )
}