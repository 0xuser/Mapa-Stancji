import React from 'react';

const PersonsInput = (props) => {
	return(
		<div>
			Ilość osób
			<select name="persons">
  				<option value="">-</option>
  				<option value="1">1</option>
  				<option value="2">2</option>

			</select>
		</div>
	);
}

export default PersonsInput;