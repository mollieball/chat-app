import React from 'react';
import './Contact.css';


function Contact(props) {
    return (


        <div className ="Contact">    
    
        <img src= {props.avatar} className= "avatar"/>
    
          
    
        <div>
        <h4 class="name">{props.name}
            </h4>
        
       <div className="status">
           <div className= {props.online ? 'status-online' : 'status-offline'} />
        <p className="status-text">
        {props.online ? 'online' : 'offline'}</p>
       </div>
        </div>
    
    
    
    </div>

    )};

export default Contact;