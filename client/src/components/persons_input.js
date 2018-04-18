import React from 'react';

const PersonsInput = (props) => {
	return(
		<div>
			Ilość osób
			{/* <input
				name="persons"
				min="1" 
				max="2" 
				type="number" 
				defaultValue="1"
			/> */}
			<select name="persons">
  				<option value="">-</option>
  				<option value="1">1</option>
  				<option value="2">2</option>

			</select>
		</div>
	);
}

export default PersonsInput;