import ArrowLink from "../arrow-link/ArrowLink";

interface ArrowLinkButtonProps {
    bgColor: string
}

const ArrowLinkButton: React.FC<ArrowLinkButtonProps> = ({ bgColor }) => {
    return (
        <>
            <div
                className="max-w-fit rounded-[2px] p-[10px] shadow-[2px_2px_5px_rgba(0,0,0,0.4)]"
                style={{backgroundColor: bgColor}}>
                <ArrowLink label="Get in touch" href={"/contact-us"}></ArrowLink>
            </div>
        </>
    )
}

export default ArrowLinkButton;
