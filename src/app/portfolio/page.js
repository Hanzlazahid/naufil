import Navbar from "@/component/commons/navbar/Navbar";
import PortfolioLayout1 from "./PortfolioLayout1";
import { Card } from "@/component/commons";
import { images } from "@/config";

export default function About() {
    return (
        <div>
            <Navbar />
            <PortfolioLayout1 leftHeading={"Instagram: Connected Through IG"} leftTextSm1={"Teens don’t use IG like everyone else. This campaign explores how their smallest interactions on the platform can lead to the most real friendships in real life."} leftTextSm2={"Made at Instagram’s Creative X in collaboration with Johannes Leonardo."} leftTextSm3={"Clio Awards Shortlist Film"} rightHeading={"Long forms:"} />
            <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card src={images.image1} text={"Instagram: Conected Through IG"} />
                <Card src={images.image2} text={"Instagram: Conected Through IG"} />
                <Card src={images.image1} text={"Instagram: Conected Through IG"} />
                <Card src={images.image2} text={"Instagram: Conected Through IG"} />
                <Card src={images.image1} text={"Instagram: Conected Through IG"} />
                <Card src={images.image2} text={"Instagram: Conected Through IG"} />
            </div>
        </div>
    );
}
