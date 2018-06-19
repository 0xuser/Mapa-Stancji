import React from 'react';
import CloudinaryContext from 'cloudinary-react';
import ImageGallery from 'react-image-gallery';


export default (props) => {
  const { offer } = props;

  return(
    <div>
      <div className="info-heading">
      <h1>{offer.title}</h1>
      {props.children}
      </div>
      
      
      <div className=" row">
        <div className="col-md-50 info">
          <h3>Szczegóły</h3>
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
        </div>
        <div className="col-md-50 description">
          <section className='app'>
            <h3>Galeria</h3>
            <ImageGallery 
            items={props.items} 
            disabled={true}
            showThumbnails={true}
            thumbnailPosition={'bottom'}
            showPlayButton={false}
            showBullets={true}
            />
          </section>
        </div>
      </div>
      <div className="description">
      <h3 className="cla-des-tit">Opis</h3>
        <p className="classfield-description">
          {offer.description}
        </p>
      </div>
      
    </div>
  );
}
