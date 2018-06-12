import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_offer, updateOffer } from '../../actions';
import ClassifiedInfo from './classified_info';
import CreateForm from './createForm'

class ClassifiedPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.fetch_offer(this.props.match.params.id);
    }
  }

  enableEdit(){
    this.setState({
      edit: true
    });
  }

  submit = (values) => {
    const id = this.props.offer.id
    
    this.props.updateOffer(values,id, () => {
      this.props.history.push('/');
    });    
  }

  render(){
    const { offer, error } = this.props ;
    if(error){
      return <div className="classified-cont">{error}</div>
    }
    if(Object.keys(offer).length === 0){
      return <div className="classified-cont">Ładowanie...</div>
    }
      
    const {id, ...add } = offer.address;
    const values = {
      ...add,
      title: offer.title,
      description: offer.description,
      persons: offer.persons,
      area: offer.area,
      cost: offer.cost,
      lat: offer.geolocation.lat,
      lng: offer.geolocation.lng,
      type: offer.type.id
    }
    
    return(
      <div className="classified-cont">
        {!this.state.edit? 
          <ClassifiedInfo offer={offer}/> :
          <CreateForm initialValues={values} onSubmit={this.submit}/>
        }
        
        { localStorage.getItem('id_token') === this.props.offer.userId && !this.state.edit? 
          <button onClick={this.enableEdit.bind(this)}>Edit</button> : '' }
        
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

export default connect(mapStateToProps, { fetch_offer, updateOffer })(ClassifiedPage);