import React from "react";
import Image from "next/image";
import heroImage from "../components/assets/images/ilu-hero_w_1200.png";

const SectionHero = () => {
    return (
        <div>
            <section id="hero">
                <Image src={heroImage} width="auto" height="auto" alt="ilu trio in the studio" sizes="(min-width: 301x) 100vw, (min-width: 700px) 50vw, 33vw" />
            </section>
        </div>
    )
}

export default SectionHero;