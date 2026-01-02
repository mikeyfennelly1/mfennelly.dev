import "./testimonal.css"

export default function Testimonial() {
    return (
        <>
            <div className="medium-separator container testimonial-container">
                <div id={"border-element"} className={"animated-gradient"}></div>
                <div className={"testimonial "}>

                    <p className={"side-note"} style={{fontWeight: 200}}>
                        "I had the pleasure of supervising Mikey during his internship at Midland Steel, where he consistently demonstrated strong technical skills and a proactive work ethic.

                        Mikey contributed to key projects, including the design and production data comparison report, the development of an IFC Parsing Algorithm, and the architecture design for our Installation Reports Database. He also handled various IT tasks with efficiency and reliability.

                        Mikey’s adaptability, quick learning, and collaborative spirit made him a valuable team member. I highly recommend Mikey for any future role—he will be an asset to any team."
                    </p>
                    <p className={"medium-separator side-note"}> - <span className={"bold"}>Anupam Tamrakar</span> - Manager, Research and Development at Midland Steel</p>
                </div>

            </div>
        </>
    )
}
