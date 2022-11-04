import React from "react";
import Image from "next/image";
import logo from "../components/assets/images/logo_ilu.svg";

const SectionAboutUs = () => {
    return (
        <div>
             <section id="about-us">
        <h2>About Us</h2>
        <div class="about-us-wrapper">
            <article>
                <h3>Joaquin Sosa</h3>
                <h4>Clarinet and Tenor Sax</h4>
                <Image src={logo} alt="joaquin adjusting tenor sax" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officiis veniam recusandae accusantium officia consectetur eaque tempora, dolor animi quisquam non alias at libero labore autem? Accusamus, reprehenderit earum.</p>
                <p><a href="https://www.joaquinsosa.com">www.joaquinsosa.com</a></p>
            </article>
            <article>
                <h3>Barbaro Crespo</h3>
                <h4>Percusion</h4>
                <Image src={logo} alt="machito with sun glases sitting" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officiis veniam recusandae accusantium officia consectetur eaque tempora, dolor animi quisquam non alias at libero labore autem? Accusamus, reprehenderit earum.</p>
                <p><a href="https://www.laclavedebarrio.com">www.laclavedebarrio</a></p>
            </article>
            <article>
                <h3>Aniel Someillan</h3>
                <h4>Upright Bass</h4>
                <Image src={logo} alt="joaquin adjusting tenor sax" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officiis veniam recusandae accusantium officia consectetur eaque tempora, dolor animi quisquam non alias at libero labore autem? Accusamus, reprehenderit earum.</p>
                <p><a href="https://www.anielsomeillan.com">www.anielsomeillan.com</a></p>
            </article>
        </div>
    </section> 
        </div>
    )
}

export default SectionAboutUs;