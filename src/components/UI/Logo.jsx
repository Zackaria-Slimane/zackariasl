import { Link } from "react-router-dom";
import siteData from "../../data/siteData";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img
			src={siteData.main.logo}
			alt='logo with initials'
			className='block m-0 p-0 rounded-[50%]'
			width={width}
			height={width}
		/>
	);

	return (
		<>
			{link ? (
				<Link replace='true' to='/'>
					{imageElement}
				</Link>
			) : (
				imageElement
			)}
		</>
	);
};

export default Logo;
