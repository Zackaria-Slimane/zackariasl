import zs from "../assets/logos/zs.png";
import nuxt from "../assets/techs/nuxticon.png";
import react from "../assets/techs/reacticon.png";
import golang from "../assets/techs/golang.png";
import wordpress from "../assets/techs/wordpressicon.png";
import coinbend from "../assets/featured/coinbend.png";
import cvforge from "../assets/featured/cvforge.png";
import bm from "../assets/featured/beautymall.png";
import nuxtfolio from "../assets/featured/nuxtfolio.png";
import echelon from "../assets/featured/echelon.png";
import gittrackr from "../assets/featured/gittrackr.png";
import gosql from "../assets/featured/gosql.png";
import unfetch from "../assets/featured/unfetch.png";
import clitask from "../assets/featured/clitask.png";

const uid = () => crypto.randomUUID();

const siteData = {
	main: {
		title:
			"Zackaria SLIMANE | Full Stack Developer | React | Golang | Docker | Nodejs | Nuxt | Vue.",
		name: "Zackaria Slimane",
		email: "zakaria.slimane@hotmail.fr",
		logo: zs,
	},
	socials: {
		twitter: "https://twitter.com/gitignorer",
		github: "https://github.com/Zackaria-Slimane",
		linkedin: "https://www.linkedin.com/in/zackaria-slimane/",
		resume:
			"https://drive.google.com/file/d/1X3SEKVVXQYEHoVZXWQ45K4WaAx64CHzA/view?usp=sharing",
	},

	homePage: {
		title:
			"Dedicated full stack developer fluent in and React & Golang, crafting seamless digital experiences.",
		description: `I am a full stack developer with a laser focus on JavaScript ES6 and the dynamic world of React for the front end and the efficient Golang for the back end.
		I'm a perpetual learner, a collaborator, and a believer in the power of technology to shape the future.
		bringing to life seamless, interactive web experiences.`,
	},

	projectsPage: {
		title: "Problem Solving, One Line at a Time",
		description: `Behind every project lies a challenge waiting to be conquered. Through meticulous problem-solving and creative thinking, I've transformed complex ideas into elegant solutions. These projects aren't just code; they're the product of determination, collaboration, and a relentless pursuit of excellence.`,
		cta: "Whether you're seeking an innovative React application, a polished WordPress site, or any other web development endeavor, I'm ready to embark on a journey of innovation with you. Together, we'll turn your ideas into projects that not only meet your goals but exceed your expectations.",
	},

	contactPage: {
		title: "Get in Touch: Let's Turn Ideas into Reality",
		description:
			"Thank you for taking the time to explore my work and learn more about my passion for web development and creating digital experiences. If you're excited about the possibilities, have questions, or are ready to collaborate, I'd love to hear from you!",
		cta: "At the heart of every successful project is a conversation—a meeting of minds, ideas, and aspirations. Whether you're a fellow developer, a business owner seeking a new website, or anyone else with a vision for the digital realm, I'm here to help transform your dreams into reality.",
	},

	aboutPage: {
		title: "Crafting Digital Experiences with Passion and Precision",
		description:
			"With a strong foundation in JavaScript , Golang and a modern touch with React, I craft user-centric websites that blend functionality and aesthetics seamlessly. Beyond the lines of code, I'm a perpetual learner, a collaborator, and a believer in the power of technology to shape the future.",
		why: "Ever since I started my journey in the world of web development, I've been captivated by the power of technology to transform ideas into interactive realities. I thrive on the thrill of crafting dynamic and user-friendly interfaces that seamlessly merge aesthetics with functionality.",
		learning:
			"I am often diving into the latest React concepts or exploring new ways to optimize user experiences. Continuous learning is at the heart of what I do, ensuring that I'm always at the forefront of industry trends and best practices.",
		skills:
			"My toolbox isn't limited to just JavaScript and React & Golang. I'm also well-versed in WordPress, Shopify and Nodejs among other technologies, harnessing their potential to build stunning websites that captivate audiences and drive results. From e-commerce solutions to content management systems, Ive got you covered.",
	},

	projects: [
		{
			id: uid(),
			title: "Go Docker api starter",
			description: "Basic starter of a Go API microservice dockerized",
			tech: golang,
			logo: gosql,
			linkText: "View Project",
			link: "https://github.com/Zackaria-Slimane/go-docker-ms",
			featured: true,
		},

		{
			id: uid(),
			title: "unFetch - Search image wrapper",
			description: "Search image wrapper , list and download high res images",
			tech: react,
			logo: unfetch,
			linkText: "View Project",
			link: "https://unfetch.vercel.app/",
			featured: false,
		},
		{
			id: uid(),
			title: "Echelon - Landing Page",
			description: "Responsive & modern landing page for a Bank",
			tech: react,
			logo: echelon,
			linkText: "View Project",
			link: "https://echelonbank.vercel.app/",
			featured: true,
		},
		{
			id: uid(),
			title: "Cv forge",
			description: "A resume maker based on a professionnal template.",
			logo: cvforge,
			tech: react,
			linkText: "View Project",
			link: "https://cvforge.vercel.app/",
			featured: true,
		},
		{
			id: uid(),
			title: "Go CLI notes app",
			description: "Golang CLI tasks application",
			tech: golang,
			logo: clitask,
			linkText: "View Project",
			link: "https://github.com/Zackaria-Slimane/gotask",
			featured: false,
		},
		{
			id: uid(),
			title: "Git tracker - open issues tracker",
			description:
				"A dockerized GoLang REST API that festches recent open issues and lists them in a React front",
			tech: golang,
			logo: gittrackr,
			linkText: "View Project",
			link: "https://gittrackr.vercel.app/",
			featured: true,
		},
		{
			id: uid(),
			title: "BeautyMall",
			description: "E-commerce website  - online beauty and drugstore",
			logo: bm,
			tech: wordpress,
			linkText: "View Project",
			link: "https://beautymall.ma/",
			featured: false,
		},
		{
			id: uid(),
			title: "Coinbend",
			description: "Modern landing page for a budgeting app",
			tech: nuxt,
			logo: coinbend,
			linkText: "View Project",
			link: "https://coinbend.netlify.app/",
			featured: false,
		},
	],
};

export default siteData;
