/** @jsxImportSource theme-ui */ 
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/assets/images/logo_ilu.svg";
import { useColorMode } from "theme-ui";
import { MdOutlineLightMode, MdDarkMode  } from "react-icons/md";

const NavBar = () => {
    const [colorMode, setColorMode] = useColorMode();
   

    

    return (
        <div sx={{bg: 'navColor'}} className="header-wrapper">
            <header>
                <nav className="nav">
                    <ul>
                        <li><Link href="/"><Logo sx={{color: 'inverseText'}} className="header-logo-img" alt="ilu trio logo. Click for home" /></Link></li>
                        <li><Link sx={{color: 'inverseText'}} href="/contact">Contact Us</Link></li>
                        <li><Link sx={{color: 'inverseText'}} href="#about-us">Bio</Link></li>
                        <li><Link sx={{color: 'inverseText'}} href="/contact">Comercial Offer</Link></li>
                        <li><Link sx={{color: 'inverseText'}} onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} href="#">{colorMode === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />} mode</Link></li>
                    </ul>
                </nav>
            </header>
    </div>
    );
}

export default NavBar;