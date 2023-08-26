import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";

const Project = (props) => {
	const { logo, title, description, linkText, link, tech } = props;

	return (
		<div className='mix-blend-normal rounded-lg h-full hover:scale-110'>
			<Link
				className='list-none'
				replace='true'
				target='_blank'
				rel='noreferrer noopener'
				to={link}>
				<div className='p-6'>
					{/* image */}
					<div className='w-8'>
						<img className='w-full object-cover max-h-[120px]' src={tech} alt='technologie logo' />
					</div>
					{/* image */}

					<div className='text-start font-jetBrain text-navy text-base py-4 font-semibold'>
						{title}
					</div>
					<div className='text-darkpink text-start font-heebo text-clip'>{description}</div>
					<div className='my-4'>
						<img
							width='300'
							height='180'
							srcSet={logo}
							src={logo}
							alt='Preview of the project'
							className='rounded-lg max-h-[180px] object-cover'
						/>
					</div>
					<div className='pt-4 text-sm flex items-center justify-start  hover:text-navy hover:scale-105'>
						<div className='text-start font-semibold pl-4 text-darkpink underline hover:decoration-wavy decoration-2 decoration-darkpink'>
							{" "}
							{linkText}{" "}
						</div>
						<div className='text-sm pl-2'>
							{" "}
							<FaLink />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Project;
