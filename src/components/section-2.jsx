/** @jsxImportSource theme-ui */ 
import React, { useState } from "react";
import Image from "next/image";
import imageTrio from "../components/assets/images/ilu-hero_w_1200.png";
import Logo from "../components/assets/images/logo_ilu.svg";
import { jsPDF } from "jspdf";
import Modal from "../components/modal";


const SectionCollections = () => {
    const [isShown, setIsShown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <section id="collections">
                <h2>Press Kit</h2>
                <ul>
                    <li className="colspan2">
                        <figure onClick={() => setShowModal(true)} sx={{ variant: 'figure.wrapper'}} className="instagram">
                            <Logo alt="" />
                                <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                    <a sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="#">Gallery</a>
                                </figcaption>
                        </figure>
                    </li>
                    <li >
                        <figure sx={{ variant: 'figure.wrapper'}} className="videos">
                            <Logo alt="" />
                                <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                    <a  sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="#">Videos</a>
                                </figcaption>
                        </figure>
                    </li>
                    <li >
                        <figure sx={{ variant: 'figure.wrapper'}} className="Press">
                            <Logo alt="" />
                            <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                <a  sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="https://www.bing.com/search?q=ilu+trio&qs=n&form=QBRE&sp=-1&pq=ilu+trio&sc=2-8&sk=&cvid=A6200DCF2AC34D6DBF7B4AD0EC4BA726&ghsh=0&ghacc=0&ghpl=" role="button">Press</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="colspan2">
                        <figure 
                        onMouseEnter={() => setIsShown(true)} 
                        onMouseLeave={() => setIsShown(false)} 
                        sx={{ variant: 'figure.wrapper'}} 
                        className="Rider">
                            <Logo alt="" />
                            <figcaption  sx={{ variant: 'figure.figureCaption'}}>
                                <a sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}}> {isShown ? 'Download' : "Technical Rider"}</a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                Hello Aqui
            </Modal>
        </div>
    )
}

export default SectionCollections;