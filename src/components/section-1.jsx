import React from "react";
import Image from "next/image";
import Logo from "../components/assets/images/logo_ilu.svg";
import { ABOUT } from "../components/assets/DATA";

const SectionOverview = () => {
    return (
        <div>
            <section id="overview">
        <h2>Ilu</h2>
        <div class="overview-text">
            <p>
                <Logo
                alt="ilu trio logo" 
                className="overview-img" />
                {ABOUT.text}
            </p>
        </div>
    </section>
        </div>
    )
}

export default SectionOverview;