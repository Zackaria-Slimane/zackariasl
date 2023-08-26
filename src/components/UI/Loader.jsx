import CircleLoader from "react-spinners/CircleLoader";

const Loader = (props) => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-white'>
			<CircleLoader
				color={"#102C57"}
				loading={props.loading}
				size={150}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	);
};

export default Loader;
