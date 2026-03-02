"use client"
import React from "react";
import Link from "next/link";

const projectContainer = {
    backgroundColor: "transparent",
    border: "5px solid black",
    borderRadius: "10px",
    width: "auto",
    boxSizing: "border-box",
    padding: "16px",
    margin: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
};

const projectHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
};

function Projects() {
    const projectsData = [
        {
            id: "sentinel",
            title: "Defi Sentinel Token Validator",
            image: "./images/Netki_Logo.png",
            description: "My summer 2024 internship project, in which I created an open source smart contract for clients to implement into their smart contracts to verify their transcations."
        },
        {
            id: "redrafter",
            title: "NBA Redrafting Website",
            image: "./images/Redrafter_Logo.png",
            description: "Fullstack website that allows users to redraft different NBA draft classes."
        },
        {
            id: "portfolio",
            title: "Portfolio Website",
            image: "./images/Portfolio_Logo.png",
            description: "A personal portfolio website showcasing my projects and skills."
        },
        {
            id: "pikachu",
            title: "Pikachu Chatbot",
            image: "./images/Pikachu_Logo.png",
            description: "A fullstack pikachu chatbot, created as a team project for my DevOps class using DevSecOps practices."
        },
    ];

    return (
        <div id="projects" className="projects">
            <div className="projects-list">
                {projectsData.map(project => (
                    <Link 
                        key={project.id}
                        href={`/project/${project.id}`} 
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div 
                            className="project-item" 
                            style={projectContainer}
                            onMouseOver={(e) => {
                                Object.assign(e.currentTarget.style, projectHoverStyle);
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "";
                                e.currentTarget.style.boxShadow = "";
                            }}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                style={{ 
                                    maxWidth: "150px", 
                                    maxHeight: "150px", 
                                    width: "100%", 
                                    height: "auto", 
                                    objectFit: "contain" 
                                }}
                            />
                            <div className="about" style={{ textAlign: "center", width: "100%" }}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
