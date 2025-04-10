import React from "react";
import { ProjectDetailNavBar } from "../Nav";
import { getIconComponents } from "./Icons";

function SentinelProject() {
  const TechnologiesUsed = getIconComponents(["react", "tailwind", "nextjs", "githubhost"]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <ProjectDetailNavBar />
      <div className="w-2/3 mt-32">
        <div className="flex flex-col items-center mb-8">
          <img
            src="../images/Portfolio_Logo.png"
            alt="Portfolio Project"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
          <h1 className="text-4xl font-bold mt-4">
            Portfolio Website
          </h1>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Project Overview</h2>
          <p className="mb-6 text-center">
            My personal portfolio website to showcase my projects and skills. Constantly being updated with new projects as well as overall
            design and functionality upgrades when I have time.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-6 text-center">
            Project Links
          </h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/netkicorp/defi-sentinel-token-validators/tree/main/Ethereum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:scale-110 transition-transform duration-200"
            >
              GitHub Repository
            </a>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Technologies Used</h2>
          <ul className="list-disc pl-6 mb-6 flex">{TechnologiesUsed}</ul>
        </div>
      </div>
    </div>
  );
}

export default SentinelProject;
