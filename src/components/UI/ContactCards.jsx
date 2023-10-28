import { FaTwitter, FaGithub, FaLinkedinIn, FaFileLines } from "react-icons/fa6";
import siteData from "../../data/siteData";

export function ContactCards() {
	return (
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
				<a href={siteData.socials.twitter} target='_blank' rel='noreferrer noopener'>
					<FaTwitter className='text-navy text-xl hover:text-darkpink hover:scale-110' />
				</a>
			</div>
			<div>
				<a href={siteData.socials.github} target='_blank' rel='noreferrer noopener'>
					<FaGithub className='text-navy text-xl hover:text-darkpink hover:scale-110' />
				</a>
			</div>
			<div>
				<a href={siteData.socials.linkedin} target='_blank' rel='noreferrer noopener'>
					<FaLinkedinIn className='text-navy text-xl hover:text-darkpink hover:scale-110' />
				</a>
			</div>
		</div>
	);
}
