import React from 'react';

const OfferListItem = (props) => {
    const offer = props.offer || {};
    return(
        <li className="group-list-item">
            <div className="heading">
                <h5>{offer.address.street} {offer.address.buildingNum}</h5>
                <span>{offer.cost} zł</span>
            </div>
            <div className="description">
                <p className="type">
                    {offer.type == 0? 'Pokój': 'Mieszkanie'}
                </p>
                
            </div>
            
            
        </li>
    );
}

export default OfferListItem;