import React from "react";
import { ProjectDetailNavBar } from "../Nav";
import { getIconComponents } from "./Icons";

function RedrafterProject() {
  const TechnologiesUsed = getIconComponents(["react", "vite", "typescript", "fastapi", "postgresql", "python", "render", "playwright"]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <ProjectDetailNavBar />
      <div className="w-2/3 mt-32">
        <div className="flex flex-col items-center mb-8">
          <img
            src="../images/Redrafter_Logo.png"
            alt="NBA Redrafter Project"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
          <h1 className="text-4xl font-bold mt-4">
            NBA Redrafter Website
          </h1>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Project Overview</h2>
          <p className="mb-6 text-center">
            A full-stack passion project, allowing users to interactively redraft historical NBA draft classes. 
            The React + Vite + TypeScript frontend features a custom pick-assignment system, per-team gradient theming, and polished card animations. 
            The backend is built with FastAPI and PostgreSQL, with all player and draft data sourced through a custom-built Python web scraper. Deployed and hosted on Render.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-6 text-center">
            Project Links
          </h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/RKPurple/redrafter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:scale-110 transition-transform duration-200"
            >
              GitHub Repository
            </a>
            <a
              href="https://redraft-room.onrender.com/"
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

export default RedrafterProject;
