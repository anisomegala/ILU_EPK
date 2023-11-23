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
                    variant: 'styles.footer',
                }}>  
                <Link href="/" sx={{color: 'inverseText', p: '2', fontSize: "1.2rem"}}>
                    <CiHome />
                </Link>
                <Link href="https://instagram.com/ilu_official_band_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" sx={{color: 'inverseText', p: '2', fontSize: "1.2rem"}}>
                    <CiInstagram />
                </Link>
                <div sx={{ mx: 'auto' }} />
                <div sx={{ p: 2, fontSize: "0.8rem", fontWeight: "bold" }}>© 2022 Aniel Someillan</div>
            </footer>
        </div>
    )
}

export default Footer;