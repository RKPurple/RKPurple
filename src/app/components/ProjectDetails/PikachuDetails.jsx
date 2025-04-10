import React from "react";
import { ProjectDetailNavBar } from "../Nav";
import { getIconComponents } from "./Icons";

function PikachuProject() {
  const TechnologiesUsed = getIconComponents(["react"]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <ProjectDetailNavBar />
      <div className="w-2/3 mt-32">
        <div className="flex flex-col items-center mb-8">
          <img
            src="../images/Pikachu_Logo.png"
            alt="Pikachu Chatbot Project"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
          <h1 className="text-4xl font-bold mt-4">
            Pikachu Chatbot
          </h1>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Project Overview</h2>
          <p className="mb-6 text-center">
            The Defi Sentinel Token Validator is a comprehensive solution that
            provides secure transaction validation through smart contracts. This
            project was developed during my internship at Netki and serves as a
            foundational security layer for blockchain applications.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-6 text-center">
            Project Links
          </h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/iscii/pikachu-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:scale-110 transition-transform duration-200"
            >
              GitHub Repository
            </a>
            <a
              href="https://pikachu.issacz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Visit Website
            </a>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Technologies Used</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
            {TechnologiesUsed}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PikachuProject;
