import './arrow-link-button.css'
import ArrowLink from "../arrow-link/ArrowLink";

interface ArrowLinkButtonProps {
    bgColor: string
}

const ArrowLinkButton: React.FC<ArrowLinkButtonProps> = ({ bgColor }) => {
    return (
        <>
            <div
                id="arrow-link-button"
                style={{backgroundColor: bgColor}}>
                <ArrowLink label="Get in touch" href={"/contact-us"}></ArrowLink>
            </div>
        </>
    )
}

export default ArrowLinkButton;