/** @jsxImportSource theme-ui */ 
import React from "react";
import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {
    return (
        <div sx={{maxWidth: '1200px', height: '100vh', textAlign: 'center', display: 'flex', flexFlow: "column wrap", alignItems: 'center', justifyContent: 'center'} }>
            <div sx={{textAlign: 'center'}}>
                <h2 sx={{display: 'inline-block', m: '0', marginRight: '2rem', p: '0 23px 0 0', verticalAlign: "middle", borderRight: '2px solid'}}> RESERVATIONS & CONTACT </h2>
                <address sx={{display: 'inline-block', textAlign: 'left', verticalAlign: 'middle'}}>
                    <p><a sx={{ml: '1rem', color: 'inverseText'}} href="mailto:asia.jazz.wroclaw@gmail.com"
                    >asia.jazz.wroclaw@gmail.com</a> <AiOutlineMail/></p>
                    <p><a sx={{ml: '1rem', color: 'inverseText'}} href="mailto:iluproductions.ilu@gmail.com"
                    >iluproductions.ilu@gmail.com</a> <AiOutlineMail/></p>
                </address>
            </div>
        </div>
    )
}


export default Contact;