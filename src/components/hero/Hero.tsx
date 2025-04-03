import './hero.css'

const mainParagraph = "I am currently studying Immersive Software Engineering [ISE] at the University of Limerick. I am a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence and video creation and graphics.";
const subParagraph = "When I'm not doing these things, I'm thinking about them!";

export default function Hero() {
    return (
        <>
            <h1>Mikey Fennelly</h1>
            <p>{mainParagraph}</p>
            <p>{subParagraph}</p>
        </>
    )
}
