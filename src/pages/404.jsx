import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

const NotFound = () => {
	return (
		<div className='grid min-h-fit h-[90dvh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-base font-semibold text-darkpink'>404</p>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl'>
					Oops, Page does not exist
				</h1>
				<p className='mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl'>
					Looks Like You've Strayed Off the Digital Path!
				</p>

				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						to='/'
						className='flex items-center justify-center px-6 py-2 border-2 hover:border-cream border-navy bg-transparent transition-colors hover:bg-darkpink rounded-lg hover:text-white shadow-lg hover:scale-110'>
						<span>
							<FaHouse className='text-sm md:text-lg mx-2 font-light' />
						</span>
						<p className='text-sm md:text-lg mx-2 font-light'>Home</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
