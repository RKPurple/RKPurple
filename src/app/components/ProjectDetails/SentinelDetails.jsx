import React from "react";
import { ProjectDetailNavBar } from "../Nav";
import { getIconComponents } from "./Icons";

function SentinelProject() {
  const TechnologiesUsed = getIconComponents(["solidity", "web3", "remixide", "truffle", "ganache", "python", "django"]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <ProjectDetailNavBar />
      <div className="w-2/3 mt-32">
        <div className="flex flex-col items-center mb-8">
          <img
            src="../images/Netki_Logo.png"
            alt="Sentinel Project"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
          <h1 className="text-4xl font-bold mt-4">
            DeFi Sentinel Token Validator
          </h1>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Project Overview</h2>
          <p className="mb-6 text-center">
             This project was made to a compliment to the main DeFi Sentinel workflow. In which a transaction on a blockchain
             is sent through Sentinel to be reviewed for SEC compliance and given a hashed verification token including a bunch of information. This token is then processed
             using the token validator that I created in order to verify all the information step by step before entering the main chain.
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
            <a
              href="https://www.netki.com/defi-sentinel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Company Website
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

export default SentinelProject;
