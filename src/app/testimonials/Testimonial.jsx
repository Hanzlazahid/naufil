import { TextLg, TextMd } from '@/component/commons'
import Image from 'next/image'
import React from 'react'


const Testimonial = ({src, testimonial, reference}) => {
  return (
    <div className='flex md:flex-row flex-col p-10'>
      <div className='lg:w-[15%] w-full lg:min-h-[150px] relative min-h-[55vh] md:min-h-[20vh]'>
        <Image src={src} layout='fill' objectFit='fill' className='rounded-lg'/>
      </div>
      <div className='md:ml-4 mt-4 md:w-[100%] lg:w-[85%]'>
        <TextLg text={testimonial} classes={"text-darkGrey"} />
        <TextMd text={reference} classes={"text-darkGrey text-right mt-3"} />
      </div>
    </div>
  )
}

export default Testimonial