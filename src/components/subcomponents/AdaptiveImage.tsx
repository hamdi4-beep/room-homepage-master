import Img from "./Image";

function AdaptiveImage({
    images
}: {
    images: {
        mobile: string
        desktop: string
    }
}) {
    const isMobile = window.innerWidth <= 768

    return (
        <Img src={isMobile ? images.mobile : images.desktop} />
    )
}

export default AdaptiveImage