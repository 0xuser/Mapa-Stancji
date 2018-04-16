import React from 'react';
import OfferListItem from './offer_list_item';

const OfferList = (props) => {
	
	const itemList = props.offers.map((offer) => {
		return(
			<OfferListItem
				offer={offer}
				key={offer.id}
			/>		
		);
	});
	return(
		<ul className="group-list">
			{itemList}
		</ul>
	);
}

export default OfferList;