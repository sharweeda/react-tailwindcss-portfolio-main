// Import images
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const clientsHeading = 'Some of the tools & technologies I use';

export const clientsData = [
	 {
    id: 1,
    title: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-6xl" />,
  },
  {
    id: 2,
    title: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-6xl" />,
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className="text-cyan-400 text-6xl" />,
  },
  {
    id: 5,
    title: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-6xl" />,
  },
  {
    id: 6,
    title: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-400 text-6xl" />,
  },
  {
    id: 7,
    title: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
  },
  {
    id: 8,
    title: "GitHub",
    icon: <FaGithub className="text-gray-700 dark:text-gray-300 text-6xl" />,
  },
];
