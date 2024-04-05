import mobileImageHero from '../assets/images/mobile-image-hero-1.jpg'
import desktopImageHero from '../assets/images/desktop-image-hero-1.jpg'
import arrowIcon from '../assets/images/icon-arrow.svg'

import SliderControl from './SliderControl'

import NavItems from './NavItems'
import ResponsiveImage from './subcomponents/AdaptiveImage'

function HeroSection() {
    const images = {
        mobile: mobileImageHero,
        desktop: desktopImageHero
    }

    return (
        <header className='md:flex'>
            <div>
                <NavItems />
                <ResponsiveImage images={images} />
            </div>

            <div className="relative md:p-20 p-12 basis-1/2">
                <h2 className="md:text-5xl text-3xl font-bold ">Discover innovative ways to decorate</h2>

                <div className="py-4">
                    <p className='text-primary-dark-gray'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                </div>
            
                <button className="uppercase tracking-[1em] font-semibold flex gap-4 items-center">
                    Shop now
                    <img src={arrowIcon} alt="" />
                </button>

                <SliderControl />
            </div>
        </header>
    )
}

export default HeroSection