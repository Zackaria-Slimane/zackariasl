import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import TechStack from "../components/UI/TechStack";
import Work from "../components/UI/WorkCard";

import siteData from "../data/siteData";
import SEO from "../data/seo";
import { ContactCards } from "../components/UI/ContactCards";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`About | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(", ")} />
				</Helmet>
				<>
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] sm:px-8 bg-powder'>
						<div className='flex justify-center items-center'>
							<div className='flex flex-col items-center sm:items-start p-4 max-w-[660px]'>
								<div className='text-justfiy text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
									Crafting Seamless Digital Experiences with
									<TypeAnimation
										className='bg-cream rounded-sm py-0 px-2 ml-2 text-3xl'
										sequence={["Passion", 1500, "Precision", 1500]}
										speed={30}
										wrapper='span'
										repeat={Infinity}
									/>
								</div>

								<motion.div
									initial={{ opacity: 0, x: -200 }}
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}>
									<p className='text-justify py-2 text-base text-navy w-full'>
										{siteData.aboutPage.description}
									</p>
									<p className='text-justify py-2 text-base text-navy w-full'>
										{siteData.aboutPage.learning}
									</p>
									<p className='text-justify py-2 text-base text-navy w-full'>
										{siteData.aboutPage.skills}
									</p>
								</motion.div>
								<div className='mx-auto'>
									<ContactCards />
								</div>
							</div>
						</div>

						<div className='flex justify-center'>
							<div className='basis-[600px] sm:basis-auto px-4 pt-4 mx-auto w-full'>
								<TechStack />
							</div>
						</div>
						<div className='flex justify-center'>
							<div className='basis-[660px] sm:basis-auto pt-4 sm:pt-6 mx-auto w-full'>
								<Work />
							</div>
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default About;
