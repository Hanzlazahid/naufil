import Navbar from "@/component/commons/navbar/Navbar";
import Image from "next/image";
import { images } from "@/config";
import { Text2Xl, TextMd, TextSm } from "@/component/commons";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-24 bg-dark justify-center items-center py-10">
                <div className="h-[50vh] md:h-[90vh] flex flex-row justify-center items-center md:pl-8 md:pr-5">
                    <div className="relative w-full h-full">
                        <Image
                            src={images.about}
                            layout="fill"
                            objectFit="fill"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start h-[90vh] justify-between py-10 px-5 md:py-4 ">
                    <TextMd text={"Hello/Aslema/Salut"} classes={"text-white"} />
                    <TextSm text={"My name is Mohamed Chamsseddine Abdelhafidh. You can call me Chams but if you can pronounce my full name correctly, you will get a cookie."} classes={"text-grey"} />
                    <TextSm text={"I'm a creative director/copywriter based in NY. Before advertising, I worked in non-profits. I was born and raised in Tunisia but also lived and worked in Estonia. I have the tendency to live in countries that people struggle to find on a map."} classes={"text-grey"} />
                    <TextSm text={"Hit me up if you want to discuss the latest dank meme, the latest NBA/Soccer/UFC highlight, the latest superhero movie, or if you just want to do some cool shit that may or may not look like advertising."} classes={"text-grey"} />
                    <TextMd text={"Email: abdelhafidhchamsseddine@gmail.com"} classes={"text-white"} />
                    <TextMd text={"Now: Creative Director @Grey NY "} classes={"text-white"} />
                    <TextSm text={"Previously: Instagram / R/GA NY / Grey NY / Beautiful Destinations / Rokkan NY (Now Razorfish) / Havas NY / Trivago / Muh-Tay-Zik | Hof-Fer SF / Ogilvy & Mather Tunisia / Buzzman Dubai / Krafton"} classes={"text-grey"} />
                </div>
            </div>
        </div>
    );
}
