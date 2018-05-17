import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateForm from './createForm';
import {createOffer} from '../../actions/index'
import Header from '../header';

class ClassifiedNew extends Component {
  submit = values => {
    this.props.createOffer(values,() => {
      this.props.history.push('/');
    })
  }
  
  render(){
    return(
      <div>
        <Header />
        <CreateForm onSubmit={this.submit} />
        
      </div>
    );
  }
}

export default connect(null,{ createOffer })(ClassifiedNew);