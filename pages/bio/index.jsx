/** @jsxImportSource theme-ui */ 
import React from "react";
import { useRouter } from "next/router";


const Bio = () => {
    return (
        <section sx={{height: '75vh', textAlign: 'center', display: 'flex', flexFlow: "column wrap", alignItems: 'center', justifyContent: 'center', maxWidth: '800px'} }>
                <div sx={{margin: '2rem 0rem'}}>
                    <p>
                    Ilu Name is inspired by a Yoruba word that means land, city, where without music there is nothing.Our pourpouse is explore new musical fiels inside the tradicionals standards of the afro-cuban music. 3 cubans with diferentes background are join for this project with the comun sense of explore, create and experiment.
                    With a unique format where the no presence of harmonics instruments we focus in the ênfases of the rhythm that is a foundation of our musical culture along with melodies that represent that chants of ancestors at theirs profane and spiritual celebrations. 
                    Ilu is a celebration of our roots in our modern point of view.</p>
                    <p>   
                    Ilu recently forged musical alliances, collaborating with the acclaimed Shai Maestro, enriching our sound with his unique flair. As we tread the boundaries of innovation, we are thrilled to announce our upcoming album. This project will witness the harmonious collaboration of the legendary Paquito de Rivera and the mesmerizing Shai Maestro, a fusion that promises to be a groundbreaking exploration of Afro-Cuban music in a contemporary context. Stay tuned for a harmonious journey that transcends borders and musical conventions.
                    </p>
                </div>
            </section>
    )
}


export default Bio;