import Header from './components/Header'
import './css/input.css'

import imgAboutDark from './assets/images/image-about-dark.jpg'
import imgAboutLight from './assets/images/image-about-light.jpg'
import arrowIcon from './assets/images/icon-arrow.svg'

function App() {
  return (
    <div className='font-sans-serif' role='main'>
      <Header />

      <div className='py-14 px-8'>
        <h2 className='text-4xl font-bold leading-none'>Discover innovative ways to decorate</h2>
        <p className='my-4 text-very-dark-gray'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        
        <button className='block mt-8 flex gap-4 items-center font-semibold uppercase tracking-[1em]'>
          Shop now
          <img src={arrowIcon} alt="" />
        </button>
      </div>

      <div className="img-container">
        <img src={imgAboutDark} alt="" />
      </div>

      <div className='px-8 py-12'>
        <h2 className='text-sm font-bold tracking-[.3em] uppercase'>About our furniture</h2>
        <p className='my-4'>Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>

      <img src={imgAboutLight} alt="" />
    </div>
  )
}

export default App