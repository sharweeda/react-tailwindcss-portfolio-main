const AboutClientSingle = ({ title, icon }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-48 h-48 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300">
				{icon}
				<h3 className="mt-4 text-lg font-medium">{title}</h3>
			</div>
		</>
	);
};

export default AboutClientSingle;
