import { motion } from "framer-motion";
import Section from "./Section";
import stacks from "../../data/stackStore";

const TechStack = () => {
	return (
		<Section id='skills' title='Skill Set' subtitle='My tech stack so far is '>
			<motion.div
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='grid gap-8 grid-cols-3 md:grid-cols-5 md:py-12'>
				{stacks.map(({ id, image, title }) => (
					<div key={id} className='flex flex-col align-middle justify-center items-center'>
						<div
							className='flex flex-col items-center justify-center p-5 shadow-mg rounded-lg object-cover w-24 h-24 duration-300 ease-in-out bg-white'
							role='img'
							aria-description='image of the technologie used'>
							<img
								width='56'
								height='56'
								src={image}
								srcSet={image}
								alt={title}
								className='w-36 h-36 md:h-44 md:w-44 object-contain hover:animate-bounce'
							/>
						</div>
						<p className='text-center mt-2'>{title}</p>
					</div>
				))}
			</motion.div>
		</Section>
	);
};

export default TechStack;
