import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";

import { ContactCards } from "../components/UI/ContactCards";
import siteData from "../data/siteData";
import SEO from "../data/seo";
import AllProjects from "../components/projects/allProjects";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`Projects | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(", ")} />
				</Helmet>
				<>
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] sm:px-8 bg-powder'>
						<div className='flex justify-center items-center'>
							<div className='flex flex-col items-center sm:items-start p-4 '>
								<div className='text-start text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
									Problem Solving one Line at a Time,
									<TypeAnimation
										className='bg-cream rounded-sm py-0 px-2 ml-2 text-3xl'
										sequence={["building products", 1500, "delivering solutions.", 1500]}
										speed={30}
										wrapper='span'
										repeat={Infinity}
									/>
								</div>
								<motion.div
									className='py-2 text-base text-navy w-full'
									initial={{ opacity: 0, x: -200 }}
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}>
									<p>{siteData.projectsPage.description}</p>
									<br />
									<p>{siteData.projectsPage.cta}</p>
								</motion.div>

								<div className='mx-auto'>
									<ContactCards />
								</div>
							</div>
						</div>

						<div className='basis-[300px] pt-4 sm:basis-auto'>
							<AllProjects />
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Projects;
