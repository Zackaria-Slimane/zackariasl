import react from "../assets/techs/reacticon.png";
import javascript from "../assets/techs/jsicon.png";
import jquery from "../assets/techs/jquery.png";
import tailwind from "../assets/techs/tailwindicon.png";
import bootstrap from "../assets/techs/boot.png";
import nuxt from "../assets/techs/nuxticon.png";
import vue from "../assets/techs/vueicon.png";
import supabase from "../assets/techs/supabaseicon.png";
import figma from "../assets/techs/figmaicon.png";
import netlify from "../assets/techs/netlifyicon.png";
import node from "../assets/techs/nodeicon.png";
import wordpress from "../assets/techs/wordpressicon.png";
import shopify from "../assets/techs/shopifyicon.png";
import postgresql from "../assets/techs/postgresicon.png";
import chakra from "../assets/techs/chakrauiicon.png";

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
		title: "React JS",
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
		image: supabase,
		title: "SupaBase",
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
		image: tailwind,
		title: "Tailwind CSS",
	},
	{
		id: uid(),
		image: bootstrap,
		title: "Bootstrap CSS",
	},
	{
		id: uid(),
		image: netlify,
		title: "Netlify",
	},
	{
		id: uid(),
		image: figma,
		title: "Figma",
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
