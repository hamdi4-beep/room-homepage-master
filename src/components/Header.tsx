import slideImage1 from '../assets/images/mobile-image-hero-1.jpg'
import leftArrowIcon from '../assets/images/icon-angle-left.svg'
import rightArrowIcon from '../assets/images/icon-angle-right.svg'

import NavItems from './NavItems'

function Header() {
    return (
        <header className='relative'>
            <NavItems />

            <div className="">
                <img src={slideImage1} width='100%' alt="" />
            </div>

            <div className="flex gap-12 absolute bottom-0 right-0 bg-black p-6">
                <img src={leftArrowIcon} alt="" />
                <img src={rightArrowIcon} alt="" />
            </div>
        </header>
    )
}

export default Header