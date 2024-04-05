import leftArrowIcon from '../assets/images/icon-angle-left.svg'
import rightArrowIcon from '../assets/images/icon-angle-right.svg'

function SliderControl() {
    return (
        <div className='flex absolute bottom-0 left-0 cursor-pointer'>
            <div className='bg-primary-black p-6 hover:opacity-80'>
                <img className='' src={leftArrowIcon} alt="" />
            </div>

            <div className='bg-primary-black p-6 hover:opacity-80'>
                <img className='' src={rightArrowIcon} alt="" />
            </div>
        </div>
    )
}

export default SliderControl