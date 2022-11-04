import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../components/assets/images/logo_ilu.svg";


const NavBar = () => {
    return (
        <div className="header-wrapper">
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><Link href="/"><Image className="header-logo-img" src={logo} alt="ilu trio logo. Click for home" /></Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="/bio">Bio</Link></li>
                        <li><Link href="#">Comercial Offer</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </nav>
            </header>
    </div>
    );
}

export default NavBar;