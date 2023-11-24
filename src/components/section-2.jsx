/** @jsxImportSource theme-ui */ 
import React, { useState } from "react";
import useDownloader from "react-use-downloader"; 
import Image from "next/image";
import imageTrio from "../components/assets/images/ilu-hero_w_1200.png";
import Logo from "../components/assets/images/logo_ilu.svg";
import { jsPDF } from "jspdf";
import Modal from "../components/modal";
import GridWrapper from "./gridWrapper";
import { FiDownload  } from "react-icons/fi";


const SectionCollections = () => {
    const [isShown, setIsShown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [saving, setSaving] = useState(false);

    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();



    function saveRider() {
        setSaving(true)
        let doc = new jsPDF('portrait', 'px', 'a4', false)
        doc.addImage('https://i.ibb.co/nCXNWs5/technical-Rider.png', 'PNG', 0, 0, 450, 385)
        doc.save('rider.pdf')
        setSaving(false)
    }

    return (
        <div>
            <section id="collections">
                <h2>Press Kit</h2>
                <ul>
                    <li className="colspan2">
                        <figure sx={{ variant: 'figure.wrapper'}} className="instagram">
                            <Logo alt="" />
                                <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                    <a sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="/shows">Shows</a>
                                </figcaption>
                        </figure>
                    </li>
                    <li >
                        <figure sx={{ variant: 'figure.wrapper'}} className="videos">
                            <Logo alt="" />
                                <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                    <a  sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="/videos">Videos</a>
                                </figcaption>
                        </figure>
                    </li>
                    <li >
                        <figure sx={{ variant: 'figure.wrapper'}} className="Press">
                            <Logo alt="" />
                            <figcaption sx={{ variant: 'figure.figureCaption'}}>
                                <a  sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}} href="https://gazetakrakowska.pl/znamy-laureatow-jazz-juniors-2022-kubanskie-trio-ilu-oraz-polski-kwartet-ziemia-z-prestizowa-nagroda-na-koncie/ar/c13-16919981" target='_blank' role="button">Press</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="colspan2">
                        <figure 
                        onMouseEnter={() => setIsShown(true)} 
                        onMouseLeave={() => setIsShown(false)} 
                        sx={{ variant: 'figure.wrapper'}} 
                        className="Rider">
                            <Logo alt="" />
                            <figcaption  sx={{ variant: 'figure.figureCaption'}}>
                                <a  onClick={saveRider}
                                    target='_blank'
                                    sx={{ variant: 'figure.figureCaption.figureCaptionAncor'}}> 
                                        {
                                            isShown ? <FiDownload /> : "Stage Plan"
                                        }
                                </a>
                                    
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
               <GridWrapper />
            </Modal>
        </div>
    )
}

export default SectionCollections;