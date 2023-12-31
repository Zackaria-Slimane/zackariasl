import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import {
	FaTwitter,
	FaGithub,
	FaLinkedinIn,
	FaFileLines,
	FaArrowRightFromBracket,
} from "react-icons/fa6";

import siteData from "../data/siteData";
import SEO from "../data/seo";
import { ContactCards } from "../components/UI/ContactCards";

const Contact = () => {
	const nameRef = useRef(null);
	const mailRef = useRef(null);
	const messageRef = useRef(null);

	const notify = () => {
		toast.success("Message sent! Thank you 🙏🏻", {
			duration: 3000,
			position: "top-right",
			ariaProps: {
				role: "status",
				"aria-live": "polite",
			},
		});
	};

	const resetForm = () => {
		nameRef.current.value = "";
		mailRef.current.value = "";
		messageRef.current.value = "";
		notify();
	};

	const formSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		fetch("https://getform.io/f/6b7547f9-bd94-4d3a-9d96-edbd80e61c89", {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => console.log("Form submit response", response))
			.catch((error) => console.log("Form submit error", error))
			.finally(() => resetForm());
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`Contact | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(", ")} />
				</Helmet>
				<>
					<Toaster />
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] sm:px-8 bg-powder'>
						<div className='flex justify-center items-center'>
							<div className='flex flex-col items-center sm:items-start p-4'>
								<div className='text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
									Let's Turn your Ideas into reality with
									<TypeAnimation
										className='bg-cream rounded-sm py-0 px-2 ml-2 text-3xl'
										sequence={["Owrnership.", 1500, "Collaboration.", 1500]}
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
									<p>{siteData.contactPage.description}</p>
									<br />
									<p> {siteData.contactPage.cta}</p>
								</motion.div>

								<div className='mx-auto'>
									<ContactCards />
								</div>
							</div>
						</div>

						<div className='bg-powder mx-auto my-10 rounded-lg shadow-lg max-w-[500px]'>
							<form
								className='text-left w-full p-6'
								content='formdata'
								onSubmit={(e) => formSubmit(e)}
								acceptCharset='UTF-8'
								id='contanct-form'
								method='POST'>
								<div className='w-full'>
									<div className='flex flex-col gap-6'>
										<label className='capitalize text-sm py-2 font-light text-navy'>
											name
										</label>
										<input
											type='text'
											name='name'
											ref={nameRef}
											className='rounded-lg p-3 flex focus:outline-navy bg-cream'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='capitalize text-sm py-2 font-light text-navy'>
											email
										</label>
										<input
											type='text'
											name='email'
											ref={mailRef}
											className='rounded-lg p-3 flex focus:outline-navy bg-cream'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='capitalize text-sm py-2 font-light text-navy'>
											message
										</label>
										<textarea
											name='message'
											rows='6'
											ref={messageRef}
											className='rounded-lg p-3 flex focus:outline-navy bg-cream resize-y'></textarea>
									</div>
								</div>
								<div className='flex items-center justify-center'>
									<button className='group hover:scale-110 cursor-pointer flex items-center justify-center mt-8 border-2 hover:border-transparent border-navy bg-navy transition-colors text-cream py-2 rounded-lg  dark:hover:text-navy shadow-lg'>
										<p className='text-sm md:text-lg mx-2 text-cream font-light'>Send</p>
										<span className='animate-pulse'>
											<FaArrowRightFromBracket className='text-md font-semibold mx-4' />
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Contact;
