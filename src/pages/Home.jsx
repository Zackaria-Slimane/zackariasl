import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import { MdSwipeDownAlt } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFileLines } from "react-icons/fa6";

import Logo from "../components/UI/Logo";
import Works from "../components/UI/WorkCard";
import AllProjects from "../components/projects/allProjects";

import siteData from "../data/siteData";
import SEO from "../data/seo";

const Homepage = () => {
	const [keepVisible, setKeepVisible] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [isFeatured, setIsFeatured] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.scrollY, 2);
			let newLogoSize = 50 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setKeepVisible(false);
				} else {
					setKeepVisible(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setKeepVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: keepVisible ? "flex" : "none",
		position: keepVisible ? "fixed" : "relative",
		top: keepVisible ? "3vh" : "auto",
		zIndex: 999,
		border: keepVisible ? "1px solid white" : "none",
		borderRadius: keepVisible ? "50%" : "none",
		boxShadow: keepVisible ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{siteData.main.title}</title>
					<meta name='description' content={currentSEO.description} />
					<link rel='canonical' href='https://zackariasl.dev' />
					<meta name='keywords' content={currentSEO.keywords.join(", ")} />
				</Helmet>
				<div className='page-content'>
					<div className='max-w-[1000px] m-auto  sm:w-[90dvw] sm:px-8'>
						<div
							id='photo-div'
							className='flex justify-start items-center pt-16 sm:py-12 '>
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className='mt-12'>
							<div className='flex justify-between items-center'>
								<div className='flex flex-col items-center sm:items-start p-4 max-w-[660px]'>
									<div className='text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
										Dedicated full stack developer crafting seamless digital experiences
										with
										<TypeAnimation
											className='bg-cream rounded-sm py-0 px-2 ml-2 text-3xl'
											sequence={[
												"React",
												1500,
												"Golang",
												1500,
												"Docker",
												1500,
												"Vue",
												1500,
												"Nuxt",
												1500,
												"Wordpress",
												1500,
											]}
											speed={30}
											wrapper='span'
											repeat={Infinity}
										/>
									</div>
									<motion.div
										className='pt-2 my-4 text-base text-navy w-full sm:my-3'
										initial={{ opacity: 0, x: -200 }}
										transition={{ duration: 1 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}>
										<p> 👋 Hi there!</p>

										<br />
										<p> {siteData.homePage.description}</p>
									</motion.div>

									<div className='flex items-center justify-between gap-6 pt-8'>
										<div>
											<a
												href='https://drive.google.com/file/d/1X3SEKVVXQYEHoVZXWQ45K4WaAx64CHzA/view?usp=sharing'
												target='_blank'
												rel='noreferrer noopener'
												className='flex items-center justify-center px-6 py-2 border-2 hover:border-cream border-navy bg-transparent transition-colors hover:bg-darkpink rounded-lg hover:text-white shadow-lg hover:scale-110'>
												<span>
													<FaFileLines className='text-sm md:text-lg  font-light' />
												</span>
												<p className='text-sm md:text-lg mx-2 font-light'>Resume</p>
											</a>
										</div>
										<div>
											<a
												href={siteData.socials.twitter}
												target='_blank'
												rel='noreferrer noopener'>
												<FaTwitter className='text-navy text-xl hover:text-darkpink hover:scale-110' />
											</a>
										</div>
										<div>
											<a
												href={siteData.socials.github}
												target='_blank'
												rel='noreferrer noopener'>
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

									<div className='mb-6 mt-12'>
										<a href='#projects'>
											<MdSwipeDownAlt className='text-navy text-3xl animate-bounce hover:text-darkpink hover:scale-110' />
										</a>
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
								<AllProjects isFeatured={isFeatured} />
							</div>

							<div className='flex justify-center'>
								<div className='basis-[600px] sm:basis-auto pt-8 m-auto w-4/5'>
									<Works />
								</div>
							</div>
						</div>
					</div>
				</div>
			</HelmetProvider>
		</>
	);
};

export default Homepage;
