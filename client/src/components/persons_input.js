import React from 'react';

const PersonsInput = (props) => {
	const { personsChange } = props;

	const onChange = ({ value }) => {
		personsChange(parseInt(value));
	}

	return(
		<div>
			Ilość osób
			<input 
				min="0" 
				max="2" 
				type="number" 
				onChange={e => onChange(e.target)}
			/>
		</div>
	);
}

export default PersonsInput;