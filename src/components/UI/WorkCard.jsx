import { motion } from "framer-motion";
import { WorkStore } from "../../data/workStore";
import Section from "./Section";

const Work = () => {
	return (
		<Section
			id='works'
			title='Work History'
			subtitle="Here's what i have been up to so far:">
			<ul role='list' className='max-w-[650px] w-4/5 mx-auto'>
				{WorkStore.map((work) => (
					<li key={work.id}>
						<motion.div
							initial={{ opacity: 0, x: -200 }}
							transition={{ duration: 1 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='flex flex-wrap  align-middle content-center justify-center sm:justify-evenly gap-2 mt-4 mb-6'>
							<a
								href={work.link}
								target='_blank'
								rel='noopener noreferrer'
								className='underline hover:decoration-wavy font-medium text-darkpink dark:text-cream cursor-pointer'>
								{work.position}
							</a>

							<div className='flex gap-6'>
								<p className='text-sm text-navy font-medium dark:text-peach'>
									{work.name}{" "}
								</p>
								<p className='text-sm text-navy dark:text-lavender'>
									{work.from} - {work.to}
								</p>
							</div>
						</motion.div>
					</li>
				))}
			</ul>
		</Section>
	);
};

export default Work;
