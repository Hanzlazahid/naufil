import { Card } from "@/component/commons";
import Navbar from "@/component/commons/navbar/Navbar";
import { images } from "@/config";
import './globals.css';

export default function Home() {
  const cardData = [
    { src: images.packagesMall, text: "Packages Mall" , name:'hot_pro_2'},
    { src: images.kurkure, text: "Kurkure: Toofani Mirch", name:'rocket_pro' },
    { src: images.kurkure, text: "Kurkure: Toofani Mirch", name:'your_view_matters' },
    { src: images.kurkure, text: "Kurkure: Toofani Mirch", name:'bata' },
    { src: images.bFirst1, text: "Bata BFirst", name:'anti_bacterial_shoe' },
    { src: images.bFirst2, text: "Bata BFirst", name:'toofani_mirch' },
    { src: images.bFirst2, text: "Bata BFirst", name:'packages_mall' },
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
