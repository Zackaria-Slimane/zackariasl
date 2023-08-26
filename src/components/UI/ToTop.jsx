import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 400) {
			setShowTopBtn(true);
		} else {
			setShowTopBtn(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<button
			style={{ display: showTopBtn ? "block" : "none" }}
			aria-label='To Top'
			aria-hidden='true'
			title='To Top'
			type='button'
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			className='fixed bottom-[40px] right-[40px] text-4xl rounded-lg hover:scale-125 duration-200'>
			<FaAnglesUp />
		</button>
	);
};

export default ToTop;
