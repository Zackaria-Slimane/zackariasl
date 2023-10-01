import { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Project from "./Project";
import siteData from "../../data/siteData";
import Section from "../UI/Section";
import Toggle from "../UI/Toggle";

const AllProjects = (props) => {
	const [isFeatured, setIsFeatured] = useState(props.isFeatured);

	const ToggleFeatured = () => {
		setIsFeatured((prevState) => !prevState);
	};

	let featuredProjects = siteData.projects.filter((project) => project.featured === true);
	let subtitle = isFeatured ? "Featured Projects" : "All Projects";

	const getProjects = useMemo(() => {
		return isFeatured ? featuredProjects : siteData.projects;
	}, [isFeatured, featuredProjects]);

	return (
		<Section id='projects' title='Projects' subtitle={subtitle}>
			<div className='mx-auto'>
				<Toggle onChange={ToggleFeatured} checked={isFeatured} />
			</div>
			<div className='mx-auto grid md:grid-cols-2 gap-4'>
				{getProjects.map((project) => (
					<motion.div
						initial={{ opacity: 0, x: 200 }}
						transition={{ duration: 1 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='box-border overflow-hidden p-2.5 rounded-md shadow-xl bg-white'
						key={project.id}>
						<Project
							tech={project.tech}
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
						/>
					</motion.div>
				))}
			</div>
		</Section>
	);
};

export default AllProjects;
