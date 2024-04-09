import * as React from 'react'
import arrowIcon from '../assets/images/icon-arrow.svg'

import SliderControl from './SliderControl'
import { slides } from '../data/slides'

import NavItems from './NavItems'
import AdaptiveImage from './AdaptiveImage'

function HeroSection() {
    const [index, setIndex] = React.useState(0)
    const currentSlide = slides[index]

    return (
        <header className='md:flex'>
            <div className='left-col'>
                <NavItems />
                <AdaptiveImage index={index} />
            </div>

            <div className="relative md:p-20 p-8 py-12 basis-1/2">
                <h2 className="md:text-5xl text-3xl font-bold ">{currentSlide.title}</h2>
                <p className='text-primary-dark-gray py-4'>{currentSlide.content}</p>
            
                <button className="uppercase tracking-[1em] font-semibold flex gap-4 items-center">
                    Shop now
                    <img src={arrowIcon} alt="" />
                </button>

                <SliderControl
                    updateSlide={setIndex}
                    slideIndex={index}
                />
            </div>
        </header>
    )
}

export default HeroSection