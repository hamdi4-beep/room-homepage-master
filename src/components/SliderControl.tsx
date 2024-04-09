import React from 'react'
import leftArrowIcon from '../assets/images/icon-angle-left.svg'
import rightArrowIcon from '../assets/images/icon-angle-right.svg'

import {slides} from '../data/slides'
import SlideArrow from './SlideArrow'

function SliderControl({
    updateSlide,
    slideIndex
}: {
    updateSlide: React.Dispatch<React.SetStateAction<number>>
    slideIndex: number
}) {
    const handleNextClick = () => {
        if (slideIndex < slides.length - 1) {
            updateSlide(slideIndex + 1)
        }
    }

    const handlePrevClick = () => {
        if (slideIndex > 0) {
            updateSlide(slideIndex - 1)
        }
    }

    return (
        <div className='absolute left-0 bottom-0 w-full'>
            <SlideArrow handleClick={handlePrevClick}>
                <img src={leftArrowIcon} alt='arrow left' />
            </SlideArrow>

            <SlideArrow handleClick={handleNextClick}>
                <img src={rightArrowIcon} alt='arrow right' />
            </SlideArrow>
        </div>
    )
}

export default SliderControl