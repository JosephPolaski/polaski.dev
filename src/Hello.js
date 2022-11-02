import React from 'react';
import './Hello.css';
import face from './img/face_3.png';
import { FaChevronDown } from "react-icons/fa";

class Hello extends React.Component {   
    
    //Make chevron dissappear once user scrolls away from top
    componentDidMount() {
        window.onscroll = function() {
            var chev = document.getElementById("Chevron")
            if(window.pageYOffset !== 0) {            
                chev.style.visibility = "hidden";
            } else {
                chev.style.visibility = "visible";
            }
        };
    }

    render(){
        return(
            <div className="Hello">
                <div className="Hello-header">
                    <div className="Hello-face">
                        <img src={face} alt="dashing bearded man"></img>
                    </div>
                    <div className="Hello-txt-box">
                        <p>Hi<br/>My Name is<br/>Joe.</p>
                    </div>
                    <FaChevronDown id="Chevron" className="Chevron"/>                                                 
                </div>                
            </div>            
        );
    }
}

export default Hello;