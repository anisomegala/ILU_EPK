/** @jsxImportSource theme-ui */ 
import React from "react";
import imageGallery from "../../src/components/imageGrid";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Logo from "../../src/components/assets/images/logo_ilu.svg";



const Shows = () => {

    return (
        <section>
            <h1 sx={{ color:'inverseText', textAlign: 'center', marginTop: '4rem'}}>Upcoming shows</h1>
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Blue Note Poznan</h3>
                <h4 className="vertical-timeline-element-subtitle">Poznan, PL</h4>
                <p>
                    Ilu trio & Shai Maestro - December 11th
                </p>
                 <p>
                    <a href="https://www.eventim.pl/event/ilu-trio-shai-maestro-blue-note-17834400/"  target="new">Buy here</a>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Impart Centrum</h3>
                <h4 className="vertical-timeline-element-subtitle">Wroclaw, PL</h4>
                <p>
                    Ilu trio & Shai Maestro - December 10th
                </p>
                 <p>
                    <a href="https://www.eventim.pl/event/ilu-trio-feat-shai-maestro-impart-centrum-17800843/"  target="new">Buy here</a>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Jassmin Klub</h3>
                <h4 className="vertical-timeline-element-subtitle">Warsaw, PL</h4>
                <p>
                    Ilu trio & Shai Maestro - December 9th
                </p>
                 <p>
                    <a href="https://goingapp.pl/wydarzenie/ilu-trio-shai-maestro/grudzien-2023"  target="new">Buy here</a>
                </p>
            </VerticalTimelineElement> 
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Strefa Kultura</h3>
                <h4 className="vertical-timeline-element-subtitle">Warsaw, PL</h4>
                <p>
                    Ilu trio - September 15th
                </p>
            </VerticalTimelineElement>   
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Opus Jazz Club</h3>
                <h4 className="vertical-timeline-element-subtitle">Budapest, HU</h4>
                <p>
                    Ilu trio - August 26th
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<Logo />}
            >
                <h3 className="vertical-timeline-element-title">Le Cabaret Jazz Club</h3>
                <h4 className="vertical-timeline-element-subtitle">Warsaw, PL</h4>
                <p>
                    Ilu trio - July 28th
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
        
    )

}

export default Shows;
