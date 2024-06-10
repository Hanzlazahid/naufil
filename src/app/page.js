import { Card } from "@/component/commons";
import Navbar from "@/component/commons/navbar/Navbar";
import { images } from "@/config";
import './globals.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
        <Card src={images.image1} text={"Instagram: Conected Through IG"}  />
        <Card src={images.image2} text={"Instagram: Conected Through IG"}  />
        <Card src={images.image1} text={"Instagram: Conected Through IG"}  />
        <Card src={images.image2} text={"Instagram: Conected Through IG"}  />
        <Card src={images.image1} text={"Instagram: Conected Through IG"}  />
        <Card src={images.image2} text={"Instagram: Conected Through IG"}  />
      </div>
    </div>
  );
}
