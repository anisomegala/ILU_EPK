/** @jsxImportSource theme-ui */ 
import React from "react";
import Image from 'next/image';
import {ImagesLayoutHero} from "./assets/DATA";

const GridImagesHero = () => {
   return (
            ImagesLayoutHero.map(({alt, imgsrc}, index) => {
              return <Image sx={{variant: "gridImages"}} width={300} height={300}  style={{objectFit: 'cover'}} src={imgsrc} alt={alt}  id={index} />
            })
   ) 
} 

export default GridImagesHero;