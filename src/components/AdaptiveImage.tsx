import Img from "./Image";

import mobileImageHero1 from '../assets/images/mobile-image-hero-1.jpg'
import desktopImageHero1 from '../assets/images/desktop-image-hero-1.jpg'

import mobileImageHero2 from '../assets/images/mobile-image-hero-2.jpg'
import desktopImageHero2 from '../assets/images/desktop-image-hero-2.jpg'

import mobileImageHero3 from '../assets/images/mobile-image-hero-3.jpg'
import desktopImageHero3 from '../assets/images/desktop-image-hero-3.jpg'

function AdaptiveImage({
    index
}: {
    index: number
}) {
    const isMobile = window.innerWidth <= 768

    const images = [{
        mobile: mobileImageHero1,
        desktop: desktopImageHero1
    }, {
        mobile: mobileImageHero2,
        desktop: desktopImageHero2
    }, {
        mobile: mobileImageHero3,
        desktop: desktopImageHero3
    }]

    const currentImage = images[index]

    return (
        <Img src={isMobile ? currentImage.mobile : currentImage.desktop} />
    )
}

export default AdaptiveImage