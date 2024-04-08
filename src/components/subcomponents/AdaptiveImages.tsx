import Img from "./Image";

import mobileImageHeroOne from '../../assets/images/mobile-image-hero-1.jpg'
import desktopImageHeroOne from '../../assets/images/desktop-image-hero-1.jpg'

import mobileImageHeroTwo from '../../assets/images/mobile-image-hero-2.jpg'
import desktopImageHeroTwo from '../../assets/images/desktop-image-hero-2.jpg'

import mobileImageHeroThree from '../../assets/images/mobile-image-hero-3.jpg'
import desktopImageHeroThree from '../../assets/images/desktop-image-hero-3.jpg'

function AdaptiveImages({
    currIndex
}: {
    currIndex: number
}) {
    const isMobile = window.innerWidth <= 768

    const images = [{
        mobile: mobileImageHeroOne,
        desktop: desktopImageHeroOne
    }, {
        mobile: mobileImageHeroTwo,
        desktop: desktopImageHeroTwo
    }, {
        mobile: mobileImageHeroThree,
        desktop: desktopImageHeroThree
    }]

    const currentImage = images[currIndex]

    return (
        <Img src={isMobile ? currentImage.mobile : currentImage.desktop} />
    )
}

export default AdaptiveImages