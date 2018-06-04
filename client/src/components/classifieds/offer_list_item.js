import React from 'react';
import { Link } from 'react-router-dom'

const OfferListItem = (props) => {
  const offer = props.offer || {};
  
  return(
    <li className="group-list-item">
      <div className="heading">
        <Link to={`/classified/show/${offer.id}`}>
          <h5>{offer.address.street} {offer.address.buildingNum}</h5>
        </Link>
        
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