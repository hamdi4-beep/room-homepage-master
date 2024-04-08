import HeroSection from "./HeroSection"
import Img from "./subcomponents/Image"

import imageAboutDark from '../assets/images/image-about-dark.jpg'
import imageAboutLight from '../assets/images/image-about-light.jpg'

function PageContainer() {
    return (
        <div>
            <HeroSection />
            
            <div className="md:grid grid-cols-[1fr,35rem,1fr]">
              <Img src={imageAboutDark} alt="" />
            
              <div className="p-8 py-12 md:p-12 md:py-14">
                <h2 className="uppercase tracking-[.3em] font-bold mb-2">About our furniture</h2>
                <p className="text-primary-dark-gray">Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
              </div>

              <Img src={imageAboutLight} />
            </div>
        </div>
    )
}

export default PageContainer