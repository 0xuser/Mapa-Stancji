import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_offer, updateOffer, fetchImagesList } from '../../actions';
import ClassifiedInfo from './classified_info';
import CreateForm from './createForm';
import axios from 'axios';
import { Image, CloudinaryContext} from 'cloudinary-react';
import ImageGallery from 'react-image-gallery';

class ClassifiedPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      images: []
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.fetch_offer(this.props.match.params.id);
      this.props.fetchImagesList(this.props.match.params.id);
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

  renderImages = images => {

      return  images.map(image => (
        <Image key={image.public_id} cloudName="mkabionek" publicId={image.public_id}>
        </Image>
      )
    );
  }

  getImages = images => {
    return images.map(image => {
      return {
        original: `http://res.cloudinary.com/mkabionek/image/upload/v1/${image.public_id}`,
        thumbnail: `http://res.cloudinary.com/mkabionek/image/upload/v1/${image.public_id}`
      }
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
            <ClassifiedInfo images={this.renderImages(this.props.images)} 
            items={this.getImages(this.props.images)}
            offer={offer}> 
              {localStorage.getItem('id_token') === this.props.offer.userId && !this.state.edit?
              <button onClick={this.enableEdit.bind(this)}>Edytuj ogłoszenie</button> : '' }
            </ClassifiedInfo> :
            <div className="add-offer">
              <CreateForm edit={true} initialValues={values} onSubmit={this.submit}/>
            </div>
          }
          
      </div>
    );
  }
}

function mapStateToProps(state){

  return {
    offer: state.current_offer.offer,
    images: state.current_offer.images,
    error: state.current_offer.error
  }
}

export default connect(mapStateToProps, { fetch_offer, updateOffer, fetchImagesList })(ClassifiedPage);
