import * as React from 'react'
import arrowIcon from '../assets/images/icon-arrow.svg'

import SliderControl from './SliderControl'
import { slides } from '../data/slides'

import NavItems from './NavItems'
import AdaptiveImages from './subcomponents/AdaptiveImages'

function HeroSection() {
    const [slideIndex, setSlideIndex] = React.useState(0)

    const currSlide = slides[slideIndex]
    const currIndex = slides.indexOf(currSlide)

    const handleNextClick = () => {
        if (slideIndex < slides.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
    }

    const handlePrevClick = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        }
    }

    return (
        <header className='md:flex'>
            <div className='left-col'>
                <NavItems />
                <AdaptiveImages currIndex={currIndex} />
            </div>

            <div className="relative md:p-20 p-8 py-12 basis-1/2">
                <h2 className="md:text-5xl text-3xl font-bold ">{currSlide.title}</h2>
                <p className='text-primary-dark-gray py-4'>{currSlide.content}</p>
            
                <button className="uppercase tracking-[1em] font-semibold flex gap-4 items-center">
                    Shop now
                    <img src={arrowIcon} alt="" />
                </button>

                <SliderControl
                    nextSlideClick={handleNextClick}
                    prevSlideClick={handlePrevClick}
                />
            </div>
        </header>
    )
}

export default HeroSection