import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_offer } from '../../actions'

class ClassifiedPage extends Component {

  componentDidMount(){
    console.log(this.props.match.params.id);
    if(this.props.match.params.id){
      this.props.fetch_offer(this.props.match.params.id);
      // this.props.fetch_offer('102ad632-3903-11e8-b467-0ed5f89f718b');
    }
    
    console.log(this.props);
  }

  componentDidUpdate(){
    console.log(this.props);
    
  }
  
  render(){
    const { current_offer } = this.props ;
    if(Object.keys(current_offer).length === 0){
      return <div className="classified-cont">Ładowanie...</div>
    }
    return(
      <div className="classified-cont">
        <h1>{current_offer.title}</h1>
        <table className="table-info">
          <tbody>
            <tr>
              <td>Typ</td>
              <td>{current_offer.type.type}</td>
            </tr>
            <tr>
              <td>Cena</td>
              <td>{current_offer.cost}</td>
            </tr>
            <tr>
              <td>Ilość osób</td>
              <td>{current_offer.persons}</td>
            </tr>
            <tr>
              <td>Powierzchnia</td>
              <td>{current_offer.area}</td>
            </tr>
            <tr>
              <td>Adres</td>
              <td>ul. {current_offer.address.street} {current_offer.address.buildingNum}</td>
            </tr>
            <tr>
              <td>Dzielnica</td>
              <td>{current_offer.address.district}</td>
            </tr>
          </tbody>
        </table>
        <p className="description">
          {current_offer.description}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    current_offer: state.current_offer
  }
}

export default connect(mapStateToProps, { fetch_offer })(ClassifiedPage);