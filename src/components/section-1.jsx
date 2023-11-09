/** @jsxImportSource theme-ui */ 
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../components/assets/images/logo_ilu.svg";
import { ABOUT } from "../components/assets/DATA";
import axios from 'axios';


const SectionOverview = () => {

    return (
        <div >
            <section id="overview">
                <div sx={{ borderColor: 'borderColor', borderBottomStyle: 'solid', borderBottomWidth: '0.2rem', borderTopWidth: '0.2rem', borderTopStyle: 'solid'}} >
                    <h2>About Ilu</h2>
                    <div className="overview-text">
                        <p>
                            <Logo
                            alt="ilu trio logo" 
                            className="overview-img" />
                            {ABOUT.text}
                        </p>
                    </div>
                </div>    
            </section>
        </div>
    )
}

export default SectionOverview;