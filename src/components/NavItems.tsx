import * as React from 'react'

import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'

function NavItems() {
    const [isHidden, setIsHidden] = React.useState(true)

    return (
        <nav className='absolute w-full'>
            <div className="flex space-between px-6 py-8">
                <img
                    onClick={() => setIsHidden(false)}
                    src={hamburgerIcon}
                    alt="hamburger menu icon for mobile"
                />

                <h1 className='text-primary-white text-3xl mx-auto'>room</h1>
            </div>

            <ul className={`${isHidden ? 'hidden' : ''} flex items-center gap-6 justify-between px-5 absolute bg-white text-black inset-0 font-bold`}>
                <img onClick={() => setIsHidden(true)} src={closeIcon} alt="" />
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default NavItems