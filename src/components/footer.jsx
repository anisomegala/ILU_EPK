/** @jsxImportSource theme-ui */
import React from "react";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiHome  } from "react-icons/ci";


const Footer = () => {
    return (
        <div sx={{bg: 'navColor'}}>
            <footer
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    p: 2,
                    marginTop: "2rem",
                    maxWidth: "1200px",
                    variant: 'styles.footer',
                }}>  
                <Link href="/" sx={{color: 'inverseText', p: '2'}}>
                    <CiHome />
                </Link>
                <Link href="/" sx={{color: 'inverseText', p: '2'}}>
                    <CiInstagram />
                </Link>
                <Link href="#" sx={{color: 'inverseText', p: '2'}}>
                   <CiFacebook />
                </Link>
                <div sx={{ mx: 'auto' }} />
                <div sx={{ p: 2 }}>© 2022 Aniel Someillan</div>
            
            </footer>
        </div>
    )
}

export default Footer;