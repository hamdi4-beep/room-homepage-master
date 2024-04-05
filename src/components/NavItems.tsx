import hamburgerIcon from '../assets/images/icon-hamburger.svg'
// import closeIcon from '../assets/images/icon-close.svg'

function NavItems() {
    return (
        <nav className='absolute p-12 text-primary-white flex gap-12 items-center w-full'>
            <img
                src={hamburgerIcon}
                className='block md:hidden'
                alt="hamburger menu icon for mobile"
            />

            <h2 className='text-xl font-semibold mx-auto md:mx-0'>room</h2>

            <ul className='hidden md:flex gap-8'>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default NavItems