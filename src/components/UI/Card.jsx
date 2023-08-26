import "./styles/card.css";

const Card = (props) => {
	const { title, body } = props;
	return (
		<div className='mix-blend-normal rounded-3xl outline-2 outline-cream'>
			<div className='p-2'>
				<div className='flex items-center'>
					<div className='text-[#65656d] text-base pl-4 font-semibold'>{title}</div>
				</div>
				<div className='pt-8'>
					<div className='text-base'>{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
