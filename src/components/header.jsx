import React from 'react';
import { BsGithub, BsInstagram  } from "react-icons/bs";

export default function Header(){

    return (
    <div className='container mx-auto max-w-[1200px] px-3 relative left-0 right-0'>
        <div className='flex justify-between'>
            <div className='text-gradient' data-aos="fade-right"
            // data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="0"
            >
                <a href="/">
                    <h1 className='text-[30px] leading-none font-bold'>Jeisa</h1>
                    <h4 className=' font-normal leading-none'>Ganela</h4>
                </a>
            </div>
            <div className=' flex items-center space-x-2'
            data-aos="fade-left"
            // data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="0">
                <a href="/">
                    <BsGithub />
                </a>
                <a href="/">
                    <BsInstagram />
                </a>
            </div>
        </div>
    </div>
    )
}
