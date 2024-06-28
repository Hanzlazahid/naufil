import Navbar from "@/component/commons/navbar/Navbar";
import Image from "next/image";
import { images } from "@/config";
import { Text2Xl, TextMd, TextSm } from "@/component/commons";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 bg-dark justify-center items-center py-10">
                <div className="h-[50vh] md:h-[45vh] lg:h-[90vh] flex flex-row justify-center items-center md:pl-8 md:pr-5">
                    <div className="relative w-full h-full">
                        <Image
                            src={images.about}
                            layout="fill"
                            objectFit="fill"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start md:h-[40vh] lg:h-[90vh] justify-between py-10 px-5 md:py-4">
                    <TextSm text={"Hi, I am Naufil Bin Faisal. A creative at heart, skilled in copywriting and a scriptwriter. Blending my strategic planning with a flair for engaging content. Let’s face it, I love writing and creating. From snappy tag lines to scripts (Ah, yes that’s my thing)"} classes={"text-grey"} />
                    <TextSm text={"I believe in a world where you value brand through copy. The idea is to tell stories through the perfect blend of strategy and copy. I live and breathe copywriting (You can ask my girlfriend how cheesy my copies are)."} classes={"text-grey"} />
                    <TextSm text={"I see Copywriting as a harmonious blend of art and science. The artistic elements involve storytelling, creativity, a distinctive style, and a touch of inspiration. On the scientific side, it entails conducting tests, analyzing metrics, and delving into the psychology that drives people's actions."} classes={"text-grey"} />
                    <TextMd text={"Email: naufilfaisal96@gmail.com"} classes={"text-white"} />
                    <TextSm text={"Copywriter | Creative Manager | | Content strategist | Brand Communications | Creative Planning"} classes={"text-grey"} />
                </div>
            </div>
        </div>
    );
}
