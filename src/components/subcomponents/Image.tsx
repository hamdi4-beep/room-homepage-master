function Img({
    ...props
}) {
    return (
        <div>
            <img
                className="w-full h-full"
                {...props}
            />
        </div>
    )
}

export default Img