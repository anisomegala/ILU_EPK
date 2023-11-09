/** @jsxImportSource theme-ui */ 
import React, { useState } from "react";
import Image from "next/image";
import logo from "../components/assets/images/logo_ilu.svg";
import { BIOS } from '../components/assets/DATA';


const SectionAboutUs = () => {
    return (
        <div>
        <section id="about-us">
        <h2>About Us</h2>
        <div className="about-us-wrapper">
           {
            BIOS.map((bio) => (
                <article sx={{borderColor: 'borderColor', borderRightStyle: 'solid', borderRighttWidth: '0.2rem'}} id={bio.name} key={bio.name}>
                    <h3>{bio.name}</h3>
                    <h4>{bio.instrument}</h4>
                    <Image width={300} height={300} sx={{mb: '1rem'}} style={{objectFit: 'cover'}} src={bio.img} alt="joaquin adjusting tenor sax" />
                    <p>{bio.description}</p>
                    <p><a sx={{color: 'inverseText'}} href={`https://${bio.website}`}>{bio.website}</a></p>
                </article>
            ))
           }
        </div>
    </section> 
        </div>
    )
}

export default SectionAboutUs;

