import React from 'react';

const AreaInput = (props) => {
	const { minChange, maxChange } = props;
	
	const onChange = ({ name, value }) => {
		if(name === 'min_area'){
			minChange(value)
		} else if(name === 'max_area'){
			maxChange(value);
		}
	}

	return (
		<div>
			Metraż
			<input type="number" name="min_area" 
				min="0"
				onChange={(e) => onChange(e.target)}
			/>

			<input type="number" name="max_area" 
				min="0"
				onChange={(e) => onChange(e.target)}
			/>
		</div>
	);
}

export default AreaInput;