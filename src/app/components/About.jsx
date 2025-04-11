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
                <p >I'm a senior at Stevens Institute of Technology, studying Computer Science with a minor in Finance. You wanna hire me so bad.
                </p>
            </div>
        </div>
    )
}

export default About;