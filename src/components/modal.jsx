/** @jsxImportSource theme-ui */ 
import {useEffect, useState, useRef} from 'react';
import  ReactDOM  from 'react-dom';

import { GrClose } from "react-icons/gr";

export default function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);
    const modalWrapperRef = useRef();

    useEffect(() => {
        setIsBrowser(true);

        // window.addEventListener('click', backDropHandler);
        // return () => window.removeEventListener('click', backDropHandler);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const backDropHandler = (e) => {
        if(!modalWrapperRef?.current?.contains(e.target)) {
            onClose();
        }
    }

    const modalContent = show ? (
        <div sx={{variant: "modal.modalOverlay"}}>
            <div sx={{variant: "modal.modalWrapper"}} ref={modalWrapperRef}>
                <div sx={{variant: "modal.modalModal"}}>
                 <div sx={{variant: "modal.modalHeader"}}>
                        <a href='#' onClick={handleClose}>
                         <button sx={{variant: "modal.modalButtom"}}><GrClose/></button>
                        </a>
                    </div>
                 <div sx={{variant: "modal.modalBody"}}>{children}</div>
                </div>
            </div>
        </div>
    ) : null
    
        if(isBrowser) {
            return ReactDOM.createPortal(
                modalContent, document.getElementById("modal-root")
            )
        } else {
            return null;
        }
}


