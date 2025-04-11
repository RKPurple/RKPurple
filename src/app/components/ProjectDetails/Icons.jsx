import React from "react";
import { SiSolidity,  SiWeb3Dotjs, SiDjango, SiGithubactions, SiGooglecloud, SiJirasoftware } from "react-icons/si";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { RiTailwindCssLine, RiNextjsLine, RiFirebaseFill, RiVercelLine} from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { DiJavascript } from "react-icons/di";


const iconsObject = [
    { id: "solidity", icon: <SiSolidity />, title: "Solidity" },
    { id: "web3", icon: <SiWeb3Dotjs />, title: "Web3.js" },
    { id: "remixide", icon: <img src="/images/RemixIDE_Logo.png" className="w-27 h-auto"/>, title: "Remix IDE" },
    { id: "truffle", icon: <img src="/images/Truffle_Logo.png" className="w-27 h-auto"/>, title: "Truffle" },
    { id: "ganache", icon: <img src="/images/Ganache_Logo.png" className="w-27 h-auto"/>, title: "Ganache" },
    { id: "react", icon: <FaReact />, title: "React" },
    { id: "tailwind", icon: <RiTailwindCssLine />, title: "Tailwind CSS" },
    { id: "nextjs", icon: <RiNextjsLine />, title: "Next.js" },
    { id: "githubhost", icon: <VscGithub />, title: "GitHub Hosting" },
    { id: "python", icon: <FaPython />, title: "Python" },
    { id: "django", icon: <SiDjango />, title: "Django" },
    { id: "githubactions", icon: <SiGithubactions />, title: "GitHub Actions" },
    { id: "firebase", icon: <RiFirebaseFill />, title: "Firebase" },
    { id: "googlecloud", icon: <SiGooglecloud />, title: "Google Cloud" },
    { id: "docker", icon: <FaDocker />, title: "Docker" },
    { id: "javascript", icon: <DiJavascript />, title: "JavaScript" },
    { id: "jira", icon: <SiJirasoftware />, title: "Jira" },
    { id: "githubsc", icon: <VscGithub />, title: "GitHub Source Control" },
    { id: "vercel", icon: <RiVercelLine />, title: "Vercel" },

    // Add more as needed
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
