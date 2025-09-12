import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image, projectLink, githubLink }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="border rounded-lg shadow-sm p-4 bg-secondary-light dark:bg-ternary-dark flex flex-col items-center">
				<img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />

				<h3 className="text-lg font-semibold text-center text-primary-dark dark:text-ternary-light">
					{title}
				</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{category}</p>

				<div className="flex gap-4 justify-center mt-4">
					{/* Live Demo */}
					<a
						href={projectLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-6 py-3 
						bg-gray-600 border border-reduced-500 rounded-md
							bg-gradient-to-r from-blue-500 to-blue-700 dark:from-indigo-600 dark:to-purple-600 
							text-white font-semibold  shadow-lg 
							hover:from-blue-600 hover:to-blue-800 dark:hover:from-indigo-700 dark:hover:to-purple-700 
							hover:scale-105 hover:shadow-xl 
							transform transition-all duration-300 ease-in-out"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12a7 7 0 017-7v0a7 7 0 010 14v0a7 7 0 01-7-7z" />
						</svg>
						Live Demo
					</a>

					{/* GitHub */}
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-6 py-3 
							border border-reduced-500 rounded-md
							bg-gray-600 dark:bg-gray-800 
							text-white font-semibold  shadow-lg 
							hover:bg-gray-700 dark:hover:bg-gray-900 
							hover:scale-105 hover:shadow-xl 
							transform transition-all duration-300 ease-in-out"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.759-1.333-1.759-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.118-3.176 0 0 1.008-.322 3.301 1.23a11.46 11.46 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.298-1.23 3.298-1.23.656 1.652.244 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.922.43.371.823 1.102.823 2.222v3.293c0 .318.218.694.825.576C20.565 22.27 24 17.789 24 12.5 24 5.87 18.63.5 12 .5z" />
						</svg>
						GitHub
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;