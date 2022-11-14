/** @jsxImportSource theme-ui */ 
import React from "react";
import Image from 'next/image';
import {ImagesLayout} from "./assets/DATA";

const GridImages = () => {
   return (
            ImagesLayout.map((img) => {
              return <Image sx={{variant: "gridImages"}} src={img.imgsrc} alt={img.alt}  id={img.id} />
            })
   ) 
} 

export default GridImages;