import react from "../assets/techs/reacticon.png";
import javascript from "../assets/techs/jsicon.png";
import jquery from "../assets/techs/jquery.png";
import tailwind from "../assets/techs/tailwindicon.png";
import goalng from "../assets/techs/golang.png";
import nuxt from "../assets/techs/nuxticon.png";
import vue from "../assets/techs/vueicon.png";
import figma from "../assets/techs/figmaicon.png";
import docker from "../assets/techs/docker.png";
import node from "../assets/techs/nodeicon.png";
import wordpress from "../assets/techs/wordpressicon.png";
import shopify from "../assets/techs/shopifyicon.png";
import postgresql from "../assets/techs/postgresicon.png";
import chakra from "../assets/techs/chakrauiicon.png";
import next from "../assets/techs/nextjs.png";
import githubActions from "../assets/techs/ga.png";
import mysql from "../assets/techs/mysql.png";
import postman from "../assets/techs/postman.svg";

let uid = () => crypto.randomUUID().slice(0, 18);

const Stacks = [
	{
		id: uid(),
		image: javascript,
		title: "Javascript",
	},
	{
		id: uid(),
		image: react,
		title: "React",
	},
	{
		id: uid(),
		image: next,
		title: "Next",
	},
	{
		id: uid(),
		image: nuxt,
		title: "Nuxt 3",
	},
	{
		id: uid(),
		image: vue,
		title: "Vue 3",
	},

	{
		id: uid(),
		image: node,
		title: "Node JS",
	},
	{
		id: uid(),
		image: postgresql,
		title: "PostgreSQL",
	},
	{
		id: uid(),
		image: mysql,
		title: "MySQL",
	},
	{
		id: uid(),
		image: goalng,
		title: "Golang",
	},
	{
		id: uid(),
		image: docker,
		title: "Docker",
	},
	{
		id: uid(),
		image: githubActions,
		title: "Github Actions",
	},
	{
		id: uid(),
		image: tailwind,
		title: "Tailwind CSS",
	},
	{
		id: uid(),
		image: jquery,
		title: "jQuery",
	},
	{
		id: uid(),
		image: chakra,
		title: "Chakra UI",
	},
	{
		id: uid(),
		image: figma,
		title: "Figma",
	},
	{
		id: uid(),
		image: postman,
		title: "Postman",
	},
	{
		id: uid(),
		image: wordpress,
		title: "Wordpress",
	},
	{
		id: uid(),
		image: shopify,
		title: "Shopify",
	},
];

export default Stacks;
