/** @jsxImportSource theme-ui */ 
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import YoutubeVideo from "../../src/components/youtubeVideo";

const Videos = () => {
    const id_1 = "ug-NmgN5D78";
    const id_2 = "TQj2_jUwlOY";
    return (
        <div  sx={{textAlign: 'center', display: 'flex', flexFlow: "column wrap", alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '7rem', marginTop: '5rem'} }>
            <div sx={{display:'flex', flexDirection: "column", alignItems: 'center', gap: '2rem'}}>
                <h2 sx={{display: 'inline-block', m: '0', marginRight: '2rem', p: '0 23px 0 0', verticalAlign: "middle", borderRight:'2px solid'}}> Jassmin - Warsaw </h2>
                    <YoutubeVideo id= {id_1}/>
            </div>
            <div sx={{display:'flex', flexDirection: "column", alignItems: 'center', gap: '2rem'}}>
                <h2 sx={{display: 'inline-block', m: '0', marginRight: '2rem', p: '0 23px 0 0', verticalAlign: "middle", borderRight:'2px solid'}}> Opus Jazz Club - Budapest  </h2>
                    <YoutubeVideo id= {id_2} />
            </div>
        </div>
    )
}


export default Videos;