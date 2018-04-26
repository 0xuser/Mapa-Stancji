import React from 'react';

const AreaInput = (props) => {

	return (
		<div>
			Metraż
			<input type="number" name="min_area" 
				min="0"
				defaultValue="0"
			/>

			<input type="number" name="max_area" 
				min="0"
				defaultValue="5000"
			/>
		</div>
	);
}

export default AreaInput;