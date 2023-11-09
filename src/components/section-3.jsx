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



//  <article>
//                 <h3>Barbaro Crespo</h3>
//                 <h4>Percusion</h4>
//                 <Image src={logo} alt="machito with sun glases sitting" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officiis veniam recusandae accusantium officia consectetur eaque tempora, dolor animi quisquam non alias at libero labore autem? Accusamus, reprehenderit earum.</p>
//                 <p><a href="https://www.laclavedebarrio.com">www.laclavedebarrio</a></p>
//             </article>
//             <article>
//                 <h3>Aniel Someillan</h3>
//                 <h4>Upright Bass</h4>
//                 <Image src={logo} alt="joaquin adjusting tenor sax" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officiis veniam recusandae accusantium officia consectetur eaque tempora, dolor animi quisquam non alias at libero labore autem? Accusamus, reprehenderit earum.</p>
//                 <p><a href="https://www.anielsomeillan.com">www.anielsomeillan.com</a></p>
//             </article>