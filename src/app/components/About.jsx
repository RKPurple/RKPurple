import React from "react";

function About() {
    return (
        <div id="about" className="bio" style={{ display: "flex", alignItems: "center", gap: "80px" }}>
            <div className="bio-image">
            <img
                src="./assets/portrait.jpg" 
                style={{ width: "25vw", height: "auto", borderRadius: "50%" }}
                alt="Me"
            />
            </div>
            <div className="bio-text">
                <h1>Rohan Kallur</h1>
                <p>I'm a recent grad from Stevens Institute of Technology, with a Bachelor's in Computer Science and a Minor in Finance.</p>
                <p>Certified V4 climber and bucket getter, tryna find a job so I can move out of my mom's basement :D</p>
                <p>You wanna hire me so bad.</p>
            </div>
        </div>
    )
}

export default About;