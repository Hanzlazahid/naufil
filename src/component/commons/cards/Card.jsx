import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TextMd } from '..';

const Card = ({ src, classes, text, name }) => {
  return (
    <div className={`${classes} relative flex flex-col items-center justify-center lg:h-[75vh] md:h-[50vh] sm:h-[55vh] h-[55vh] group cursor-pointer overflow-hidden`}>
      <Image src={src} alt="Card Image" layout="fill" objectFit="cover" className="absolute inset-0 z-0 transition-transform duration-300 ease-in-out group-hover:scale-150"/>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out z-5"></div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center z-10">
        <TextMd text={text} classes={"font-normal text-white"} />
        <Link href={{pathname:'/portfolio',query:{name:name}}} className='text-white text-xs mt-2 italic'>— View —</Link>
      </div>
    </div>
  );
}

export default Card;


