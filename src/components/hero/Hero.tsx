import './hero.css'

import {GeistSans} from "geist/font/sans";

export default function Hero() {
    return (
        <>
            <div className={"large-separator"}>
                <h1 className={GeistSans.className} style={{fontSize: "5rem"}}>Mikey Fennelly</h1>
                <div className={"small-separator"}>
                    <p>
                        I'm a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence, video creation and graphics.
                        While actively pursuing these interests, I'm also enjoying college life at the <span className="bold">University of Limerick</span> where I'm studying <span className="bold">Immersive Software Engineering [ISE]</span>.
                    </p>

                    <p className={"medium-separator"}>
                        <span className="bold">When I'm not doing these things, I'm thinking about them!</span>
                    </p>
                </div>
            </div>
        </>
    )
}