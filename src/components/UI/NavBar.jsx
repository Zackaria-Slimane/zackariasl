import { Link } from "react-router-dom";

const NavBar = ({ active, setPath }) => {
	return (
		<div className='flex justify-center items-center m-0'>
			<nav className='flex justify-center items-center fixed z-[999] top-[3vh] sm:w-4/5 sm:text-md sm:mx-[25%]'>
				<div className='sm:w-2/5 mx-auto w-[280px] h-10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] px-[0%] rounded-full bg-[#ffffffb3] backdrop-blur-zs'>
					<ul className='flex justify-around items-center mx-auto mt-[11px] list-none'>
						<li
							className={
								active === "/"
									? "font-[bold] text-sm text-darkpink overline decoration-darkpink decoration-2 hover:underline "
									: "font-[bold] text-sm decoration-darkpink decoration-2 hover:underline"
							}>
							<Link
								onClick={() => setPath("/")}
								to='/'
								className='no-underline hover:text-darkpink duration-300 transition-colors font-heebo'>
								Home
							</Link>
						</li>
						<li
							className={
								active === "/about"
									? "font-[bold] text-sm text-darkpink overline decoration-darkpink decoration-2 hover:underline"
									: "font-[bold] text-sm decoration-darkpink decoration-2 hover:underline"
							}>
							<Link
								onClick={() => setPath("/about")}
								to='/about'
								className='no-underline hover:text-darkpink duration-300 transition-colors font-heebo'>
								About
							</Link>
						</li>
						<li
							className={
								active === "/projects"
									? "font-[bold] text-sm text-darkpink overline decoration-darkpink decoration-2 hover:underline"
									: "font-[bold] text-sm decoration-darkpink decoration-2 hover:underline"
							}>
							<Link
								onClick={() => setPath("/projects")}
								className='no-underline hover:text-darkpink duration-300 transition-colors font-heebo'
								to='/projects'>
								Projects
							</Link>
						</li>

						<li
							className={
								active === "/contact"
									? "font-[bold] text-sm text-darkpink overline decoration-darkpink decoration-2 hover:underline"
									: "font-[bold] text-sm decoration-darkpink decoration-2 hover:underline"
							}>
							<Link
								onClick={() => setPath("/contact")}
								className='no-underline hover:text-darkpink duration-300 transition-colors font-heebo'
								to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
