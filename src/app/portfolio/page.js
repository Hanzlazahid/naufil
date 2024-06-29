"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/commons/navbar/Navbar";
import PortfolioLayout1 from "./PortfolioLayout1";
import { Card } from "@/component/commons";
import { images } from "@/config";

export default function Portfolio({ searchParams }) {
    const [content, setContent] = useState({
        leftHeading: "Hot Pro 2",
        leftTextSm1: "Capture the moment with Hot Pro 2.",
        leftTextSm2: "High-definition camera and superior performance.",
        leftTextSm3: "Hot Pro 2 - unleash your creativity.",
        longFormHeading: "Long Video:",
        src1: "https://player.vimeo.com/video/957245665?h=2c59e291aa",
        src2: "https://player.vimeo.com/video/957245487?h=a3dd4e0552",
        shortFormHeading: "Short Ad:",
        shortsrc1: "https://player.vimeo.com/video/957245623?h=af992be64f",
        shortsrc2: "https://player.vimeo.com/video/957245571?h=3a156016ed",
        shortsrc3: "https://player.vimeo.com/video/957245383?h=4d15131f59",
        shortsrc4: "https://player.vimeo.com/video/957245335?h=1270006f00",
        shortsrc5: "https://player.vimeo.com/video/957245294?h=109edd9eb0",
    });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         switch (searchParams.name) {
    //             case 'hot_pro_2':
    //                 setContent({
    //                     leftHeading: "Packages Mall",
    //                     leftTextSm1: "Discover the best shopping experience at Packages Mall.",
    //                     leftTextSm2: "From top brands to exclusive deals, Packages Mall has it all.",
    //                     leftTextSm3: "Visit us for an unforgettable shopping spree.",
    //                     longFormHeading: "Long Video:",
    //                     shortFormHeading: "Short Ad:",
    //                     src1: "https://player.vimeo.com/video/959112435?h=7fe89e5f08",
    //                     shortsrc1: "https://player.vimeo.com/video/957246770?h=37cc34fa4a",
    //                 });
    //                 break;
    //             case 'rocket_pro':
    //                 setContent({
    //                     leftHeading: "Kurkure: Toofani Mirch",
    //                     leftTextSm1: "Spice up your life with Kurkure: Toofani Mirch.",
    //                     leftTextSm2: "Experience the fiery taste that sets your taste buds on fire.",
    //                     leftTextSm3: "A snack that brings excitement to your moments.",
    //                     longFormHeading: "Long Video:",
    //                     src1: "https://player.vimeo.com/video/957246707?h=ac189d914b",
    //                     src2: "https://player.vimeo.com/video/957246658?h=d8af4cacb0",
    //                     src3: "https://player.vimeo.com/video/957246592?h=b22002fbf8",
    //                     src4: "https://player.vimeo.com/video/957246559?h=3580562e12",
    //                 });
    //                 break;
    //             case 'your_view_matters':
    //                 setContent({
    //                     leftHeading: "Bata BFirst",
    //                     leftTextSm1: "Step into style with Bata BFirst.",
    //                     leftTextSm2: "Elegant designs and supreme comfort for every occasion.",
    //                     leftTextSm3: "BFirst - where fashion meets function.",
    //                     longFormHeading: "Long Video:",
    //                     src1: "https://player.vimeo.com/video/957246441?h=6418eeb622",
    //                     shortFormHeading: "Short Ad:",
    //                     shortsrc1: "https://player.vimeo.com/video/957246397?h=4fa5baf50e"
    //                 });
    //                 break;
    //             case 'bata':
    //                 setContent({
    //                     leftHeading: "Q-Mobile QSmart",
    //                     leftTextSm1: "Smartphone technology at its best with Q-Mobile QSmart.",
    //                     leftTextSm2: "Stay connected with cutting-edge features and sleek design.",
    //                     leftTextSm3: "QSmart - innovation in your hands.",
    //                     longFormHeading: "Long Video:",
    //                     src1: "https://player.vimeo.com/video/957246350?h=f6087bdbdb",
    //                     shortFormHeading: "Short Ad:",
    //                     shortsrc1: "https://player.vimeo.com/video/957246304?h=b8d3db46fa",
    //                     shortsrc2: "https://player.vimeo.com/video/957246266?h=8a5c058758",
    //                 });
    //                 break;
    //             case 'anti_bacterial_shoe':
    //                 setContent({
    //                     leftHeading: "Hot Pro 2",
    //                     leftTextSm1: "Capture the moment with Hot Pro 2.",
    //                     leftTextSm2: "High-definition camera and superior performance.",
    //                     leftTextSm3: "Hot Pro 2 - unleash your creativity.",
    //                     longFormHeading: "Long Video:",
    //                     src1: "https://player.vimeo.com/video/957246225?h=0849cbc9bf",
    //                     shortFormHeading: "Short Ad:",
    //                     shortsrc1: "https://player.vimeo.com/video/957246190?h=01c35334ab",
    //                 });
    //                 break;
    //             case 'toofani_mirch':
    //                 setContent({
    //                     leftHeading: "Hot Pro 2",
    //                     leftTextSm1: "Capture the moment with Hot Pro 2.",
    //                     leftTextSm2: "High-definition camera and superior performance.",
    //                     leftTextSm3: "Hot Pro 2 - unleash your creativity.",
    //                     src1: "https://player.vimeo.com/video/957246114?h=e3739540a7",
    //                     src2: "https://player.vimeo.com/video/957246063?h=ce7cc713f8",
    //                     src3: "https://player.vimeo.com/video/957245929?h=de265e218b",
    //                     src4: "https://player.vimeo.com/video/957245792?h=bd86b65dc5",
    //                 });
    //                 break;
    //             case 'packages_mall':
    //                 setContent({
    //                     leftHeading: "Hot Pro 2",
    //                     leftTextSm1: "Capture the moment with Hot Pro 2.",
    //                     leftTextSm2: "High-definition camera and superior performance.",
    //                     leftTextSm3: "Hot Pro 2 - unleash your creativity.",
    //                     longFormHeading: "Long Video:",
    //                     src1: "https://player.vimeo.com/video/957245665?h=2c59e291aa",
    //                     src2: "https://player.vimeo.com/video/957245487?h=a3dd4e0552",
    //                     shortFormHeading: "Short Ad:",
    //                     shortsrc1: "https://player.vimeo.com/video/957245623?h=af992be64f",
    //                     shortsrc2: "https://player.vimeo.com/video/957245571?h=3a156016ed",
    //                     shortsrc3: "https://player.vimeo.com/video/957245383?h=4d15131f59",
    //                     shortsrc4: "https://player.vimeo.com/video/957245335?h=1270006f00",
    //                     shortsrc5: "https://player.vimeo.com/video/957245294?h=109edd9eb0",
    //                 });
    //                 break;
    //         }
    //     };
    //     fetchData();
    // }, [searchParams]);

    const cardData = [
        { src: images.packagesMall, text: "Qmobile: It’s Hot Pro 2!", name: 'hot_pro_2' },
        { src: images.kurkure, text: "Qmobile: Having Fun is easy with Rocket Pro!", name: 'rocket_pro' },
        { src: images.kurkure, text: "Qmobile: #YourViewMatters!", name: 'your_view_matters' },
        { src: images.kurkure, text: "It’s Surprisingly Bata!", name: 'bata' },
        { src: images.bFirst1, text: "Bata: Pakistan’s First Ever Anti-bacterial shoe!", name: 'anti_bacterial_shoe' },
        { src: images.bFirst2, text: "Pepsico: Kurkure’s Toofani Mirch!", name: 'toofani_mirch' },
        { src: images.bFirst2, text: "Packages Mall: Shop Till Glory!", name: 'packages_mall' },
    ];

    return (
        <div>
            <Navbar />
            {searchParams &&
                <PortfolioLayout1
                    leftHeading={content.leftHeading}
                    leftTextSm1={content.leftTextSm1}
                    leftTextSm2={content.leftTextSm2}
                    leftTextSm3={content.leftTextSm3}
                    longFormHeading={content.longFormHeading}
                    src1={content.src1}
                    src2={content.src2}
                    src3={content.src3}
                    src4={content.src4}
                    shortFormHeading={content.shortFormHeading}
                    shortsrc1={content.shortsrc1}
                    shortsrc2={content.shortsrc2}
                    shortsrc3={content.shortsrc3}
                    shortsrc4={content.shortsrc4}
                    shortsrc5={content.shortsrc5}
                />
            }
            <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((card, index) => (
                    <Card key={index} src={card.src} text={card.text} name={card.name} />
                ))}
            </div>
        </div>
    );
}
