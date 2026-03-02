import React from "react";
import { SiSolidity,  SiWeb3Dotjs, SiDjango, SiGithubactions, SiGooglecloud, SiJirasoftware, SiVite, SiTypescript, SiFastapi, SiPostgresql, SiRender } from "react-icons/si";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { RiTailwindCssLine, RiNextjsLine, RiFirebaseFill, RiVercelLine} from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { DiJavascript } from "react-icons/di";


const iconsObject = [
    // Languages
    { id: "javascript", icon: <DiJavascript />, title: "JavaScript" },
    { id: "typescript", icon: <SiTypescript />, title: "TypeScript" },
    { id: "python", icon: <FaPython />, title: "Python" },
    { id: "solidity", icon: <SiSolidity />, title: "Solidity" },

    // Frontend Frameworks & Libraries
    { id: "react", icon: <FaReact />, title: "React" },
    { id: "nextjs", icon: <RiNextjsLine />, title: "Next.js" },
    { id: "tailwind", icon: <RiTailwindCssLine />, title: "Tailwind CSS" },
    { id: "vite", icon: <SiVite />, title: "Vite" },

    // Backend Frameworks
    { id: "django", icon: <SiDjango />, title: "Django" },
    { id: "fastapi", icon: <SiFastapi />, title: "FastAPI" },
    { id: "web3", icon: <SiWeb3Dotjs />, title: "Web3.js" },
    { id: "playwright", icon: <img src="/images/Playwright_Logo.png" className="w-27 h-auto" style={{ filter: "invert(67%) sepia(60%) saturate(400%) hue-rotate(155deg) brightness(95%) contrast(90%)" }} />, title: "Playwright" },

    // Databases
    { id: "postgresql", icon: <SiPostgresql />, title: "PostgreSQL" },
    { id: "firebase", icon: <RiFirebaseFill />, title: "Firebase" },

    // Infrastructure & DevOps
    { id: "docker", icon: <FaDocker />, title: "Docker" },
    { id: "googlecloud", icon: <SiGooglecloud />, title: "Google Cloud" },
    { id: "githubactions", icon: <SiGithubactions />, title: "GitHub Actions" },

    // Hosting & Deployment
    { id: "vercel", icon: <RiVercelLine />, title: "Vercel" },
    { id: "render", icon: <SiRender />, title: "Render" },
    { id: "githubhost", icon: <VscGithub />, title: "GitHub Hosting" },

    // Tools & Blockchain Dev
    { id: "remixide", icon: <img src="/images/RemixIDE_Logo.png" className="w-27 h-auto"/>, title: "Remix IDE" },
    { id: "truffle", icon: <img src="/images/Truffle_Logo.png" className="w-27 h-auto"/>, title: "Truffle" },
    { id: "ganache", icon: <img src="/images/Ganache_Logo.png" className="w-27 h-auto"/>, title: "Ganache" },
    { id: "githubsc", icon: <VscGithub />, title: "GitHub Source Control" },
    { id: "jira", icon: <SiJirasoftware />, title: "Jira" },
];

/**
 * Returns a styled array of icon components based on the given IDs.
 * @param {string[]} ids - An array of icon IDs to render.
 * @returns {JSX.Element[]} Array of formatted icon components.
 */
export const getIconComponents = (ids) => {
  const filteredIcons = iconsObject.filter(icon => ids.includes(icon.id));

  return filteredIcons.map(icon => (
    <div
      key={icon.id}
      className='bg-white p-4 rounded-lg w-[225px] flex flex-col justify-center items-center mr-6 mb-6 transform hover:scale-110 transition-transform duration-200'
    >
      <div className='text-8xl text-[#48BBDB]'>{icon.icon}</div>
      <p className='text-[#48BBDB] font-semibold text-2xl text-center'>{icon.title}</p>
    </div>
  ));
};

export default iconsObject;
