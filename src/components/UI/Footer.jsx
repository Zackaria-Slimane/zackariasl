import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import siteData from "../../data/siteData";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className='py-8 w-full max-w-[1000px] m-auto border-t-2 border-darkpink'>
			<div className='flex justify-around mx-auto gap-6'>
				<div className='flex items-center justify-between gap-6 mt-2'>
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
				<div className='text-right text-sm text-navy mt-2'>
					© {currentYear} <span className='text-darkpink'>ZS</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
