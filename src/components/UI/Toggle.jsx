import { Switch } from "@headlessui/react";

const Toggle = ({ ...props }) => {
	const { checked, onChange } = props;
	let text = checked ? "Only Featured projects" : "All projects";

	return (
		<Switch.Group>
			<div className='flex items-center mt-2 mb-4'>
				<Switch.Label className='mr-4'> {text} </Switch.Label>
				<Switch
					checked={checked}
					onChange={onChange}
					className={`${
						checked ? "bg-darkpink" : "bg-peach"
					} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}>
					<span
						className={`${
							checked ? "translate-x-6" : "translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	);
};

export default Toggle;
