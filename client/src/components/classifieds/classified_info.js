import React from 'react';
import CloudinaryContext from 'cloudinary-react';

export default (props) => {
  const { offer } = props;
  
  return(
    <div>
      <h1>{offer.title}</h1>
        <table className="table-info">
          <tbody>
            <tr>
              <td>Typ</td>
              <td>{offer.type.type}</td>
            </tr>
            <tr>
              <td>Cena</td>
              <td>{offer.cost}</td>
            </tr>
            <tr>
              <td>Ilość osób</td>
              <td>{offer.persons}</td>
            </tr>
            <tr>
              <td>Powierzchnia</td>
              <td>{offer.area}</td>
            </tr>
            <tr>
              <td>Adres</td>
              <td>ul. {offer.address.street} {offer.address.buildingNum}</td>
            </tr>
            <tr>
              <td>Dzielnica</td>
              <td>{offer.address.district}</td>
            </tr>
          </tbody>
        </table>
        <h3>Opis:</h3>
        <p className="description">
          {offer.description}
        </p>
        { props.images}
    </div>
  );
}