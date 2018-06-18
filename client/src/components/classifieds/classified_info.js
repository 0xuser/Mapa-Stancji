import React from 'react';
import CloudinaryContext from 'cloudinary-react';

export default (props) => {
  const { offer } = props;

  return(
    <div>
      <h1>{offer.title}</h1>
      <div className="parametrikos">
        <table className="table-info">
          <tbody>
            <tr>
              <td><b>Typ</b></td>
              <td>{offer.type.type}</td>
            </tr>
            <tr>
              <td><b>Cena</b></td>
              <td>{offer.cost}</td>
            </tr>
            <tr>
              <td><b>Ilość osób</b></td>
              <td>{offer.persons}</td>
            </tr>
            <tr>
              <td><b>Powierzchnia</b></td>
              <td>{offer.area}</td>
            </tr>
            <tr>
              <td><b>Adres</b></td>
              <td>ul. {offer.address.street} {offer.address.buildingNum}</td>
            </tr>
            <tr>
              <td><b>Dzielnica</b></td>
              <td>{offer.address.district}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="cla-des-tit">Opis</h3>
        <p className="classfield-description">
          {offer.description}
        </p>
        <div className="classfield-images">
        { props.images}
        </div>
        </div>
    </div>
  );
}
