import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFileLines } from "react-icons/fa6";

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
					<div className='max-w-[1000px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] sm:px-8 bg-powder'>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col items-center sm:items-start p-4 max-w-[660px]'>
								<div className='text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
									Problem Solving, One Line at a Time & building products
									<TypeAnimation
										className='bg-cream rounded-sm py-0 px-2 ml-2 text-3xl'
										sequence={["User-centered", 1500, "Finely tuned", 1500]}
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

								<div className='flex items-center justify-between gap-6 pt-8 w-4/5'>
									<div className='flex justify-between items-center gap-8'>
										<a
											href='https://drive.google.com/file/d/1Yt4MjyakrTgygayKHfq4YmqobL1SfRDu/view?usp=sharing'
											target='_blank'
											rel='noreferrer noopener'
											className='flex items-center justify-center px-6 py-2 border-2 hover:border-cream border-navy bg-transparent transition-colors hover:bg-darkpink rounded-lg hover:text-white shadow-lg hover:scale-110'>
											<span>
												<FaFileLines className='text-sm md:text-lg mx-2 font-light' />
											</span>
											<p className='text-sm md:text-lg mx-2 font-light'>Resume</p>
										</a>
										<div className='flex items-center justify-between gap-6'>
											<div>
												<a
													href={siteData.socials.twitter}
													target='_blank'
													rel='noreferrer noopener'>
													<FaTwitter className='text-navy text-xl hover:text-darkpink hover:scale-110' />
												</a>
											</div>
											<div>
												<a href={siteData.socials.github} target='_blank' rel='noreferrer noopener'>
													<FaGithub className='text-navy text-xl hover:text-darkpink hover:scale-110' />
												</a>
											</div>
											<div>
												<a
													href={siteData.socials.linkedin}
													target='_blank'
													rel='noreferrer noopener'>
													<FaLinkedinIn className='text-navy text-xl hover:text-darkpink hover:scale-110' />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* image logo */}
							<div className='hidden sm:flex items-start sm:min-w-[340px] sm:w-[80dvw]'>
								<div className='max-w-[250px]  m-auto'>
									<div className='rotate-6'>
										<img
											srcSet={siteData.main.logo}
											src={siteData.main.logo}
											alt='intitials logo'
											className='w-full object-cover mx-auto'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='basis-[300px] pt-10 sm:basis-auto'>
							<AllProjects />
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Projects;
