import React from "react";
import Image from "next/image";
import logo from "../components/assets/images/logo_ilu.svg";

const SectionOverview = () => {
    return (
        <div>
            <section id="overview">
        <h2>Ilu</h2>
        <div class="overview-text">
            <p>
                <Image src={logo} 
                alt="ilu trio logo" 
                className="overview-img" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ad minima ut in perferendis maxime delectus laudantium, saepe libero obcaecati harum soluta cupiditate at labore! Provident sint eos quo nobis.
            </p>
        </div>
    </section>
        </div>
    )
}

export default SectionOverview;