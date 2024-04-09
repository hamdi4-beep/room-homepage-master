function SlideArrow({
    handleClick,
    children
}: {
    handleClick: () => void
    children: React.ReactNode
}) {
    return (
        <button onClick={handleClick} className='bg-primary-black p-6 px-8 cursor-pointer hover:opacity-80'>
            {children}
        </button>
    )
}

export default SlideArrow