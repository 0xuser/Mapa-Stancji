import React from 'react';

const PersonsInput = (props) => {
	return(
		<div>
			Ilość osób
			<input
				name="persons"
				min="1" 
				max="2" 
				type="number" 
				defaultValue="1"
			/>
		</div>
	);
}

export default PersonsInput;