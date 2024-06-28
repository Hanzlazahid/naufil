import { Card } from "@/component/commons";
import Navbar from "@/component/commons/navbar/Navbar";
import { images } from "@/config";
import './globals.css';

export default function Home() {
  const cardData = [
    { src: images.packagesMall, text: "Qmobile: It’s Hot Pro 2!" , name:'hot_pro_2'},
    { src: images.kurkure, text: "Qmobile: Having Fun is easy with Rocket Pro!", name:'rocket_pro' },
    { src: images.kurkure, text: "Qmobile: #YourViewMatters!", name:'your_view_matters' },
    { src: images.kurkure, text: "It’s Surprisingly Bata!", name:'bata' },
    { src: images.bFirst1, text: "Bata: Pakistan’s First Ever Anti-bacterial shoe!", name:'anti_bacterial_shoe' },
    { src: images.bFirst2, text: "Pepsico: Kurkure’s Toofani Mirch!", name:'toofani_mirch' },
    { src: images.bFirst2, text: "Packages Mall: Shop Till Glory!", name:'packages_mall' },
  ];

  return (
    <div>
      <Navbar />
      <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
        {cardData.map((card, index) => (
          <Card key={index} src={card.src} text={card.text} name={card.name} />
        ))}
      </div>
    </div>
  );
}
