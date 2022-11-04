import React from "react";
import Image from "next/image";
import logo from "../components/assets/images/logo_ilu.svg";

const SectionCollections = () => {
    return (
        <div>
            <section id="collections">
                <h2>Press Kit</h2>
                <ul>
                    <li class="colspan2"><figure className="instagram"><Image src={logo} alt="" /><figcaption><a href="#">Social Media</a></figcaption></figure></li>
                    <li ><figure className="videos"><Image src={logo} alt="" /><figcaption><a href="#">Videos</a></figcaption></figure></li>
                    <li ><figure className="Press"><Image src={logo} alt="" /><figcaption><a href="#">Press</a></figcaption></figure></li>
                    <li class="colspan2"><figure className="Rider"><Image src={logo} alt="" /><figcaption><a href="#"> Technical Rider</a></figcaption></figure></li>
                </ul>
            </section>
        </div>
    )
}

export default SectionCollections;