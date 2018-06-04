import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_offer } from '../../actions'

class ClassifiedPage extends Component {

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.fetch_offer(this.props.match.params.id);
      // this.props.fetch_offer('102ad632-3903-11e8-b467-0ed5f89f718b');
    }
    
  }

  componentDidUpdate(){    
    console.log(this.props.error);
    
  }


  render(){
    const { offer, error } = this.props ;
    if(error){
      return <div className="classified-cont">{error}</div>
    }
    if(Object.keys(offer).length === 0){
      return <div className="classified-cont">Ładowanie...</div>
    }
    return(
      <div className="classified-cont">
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
        <p className="description">
          {offer.description}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  
  return {
    offer: state.current_offer.offer,
    error: state.current_offer.error
  }
}

export default connect(mapStateToProps, { fetch_offer })(ClassifiedPage);