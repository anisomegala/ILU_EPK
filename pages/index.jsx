import React from "react";
import Link from "next/link";

import SectionOverview from "../src/components/section-1";
import SectionCollections from "../src/components/section-2";
import SectionAboutUs from "../src/components/section-3";
import SectionHero from "../src/components/section-hero";


const Page = () => {
    return (
        <div>
            <SectionHero />
            <SectionOverview />
            <SectionCollections />
            <SectionAboutUs  />
        </div>
    )
}

export default Page;