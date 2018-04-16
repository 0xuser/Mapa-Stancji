import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/index';
import PersonsInput from '../components/persons_input';
import AreaInput from '../components/area_input';

class Filter extends Component {

	constructor(props){
		super(props);
		this.state = {
			type: 0,
			min_price: 0,
			max_price: 5000,
			min_area: 0,
			max_area: 500,
			persons: 1,
			search: false
		};
	}

	typeChange({value}){
		this.setState({type: parseInt(value)});		
	}

	componentDidMount(){
		this.props.fetchOffers();
	}

	componentDidUpdate(){
	}

	formChange(e){
		const state = this.state;
		state[e.target.name] = e.target.value
		this.setState({state: state});	
		this.props.fetchOffers(this.state);	
		
	}

	
  render(){
		return(
			<div className="c-filters">
				<form onChange={(e) => this.formChange(e)}>
					<div className="f-type filter">
						<div >
							<input 
								type="radio" 
								name="type" 
								id="room-type"
								value="0" 
								onChange={(e) => this.typeChange(e.target)}
								checked={this.state.type == 0? "checked" : null}
							/>
							<label htmlFor="room-type">Pokój</label>

							<input 
								type="radio" 
								name="type" 
								id="flat-type"
								value="1" 
								onChange={(e) => this.typeChange(e.target)}
								checked={this.state.type == 1? "checked" : null}
							/>
							<label htmlFor="flat-type">Mieszkanie</label>
						</div>

						<div>
							{this.state.type == 0? 
								<PersonsInput /> : <AreaInput />
							}
						</div>
					</div>

					<div className="f-price filter">
						<input type="number" name="min_price"
							min="0"
							value={this.state.min_price} 
							onChange={() => {}}
						/>
						<input type="number" name="max_price" 
							min="0"
							onChange={() => {}}
							value={this.state.max_price}
						/>
					</div>
				</form>
    	</div>
		);
	}
}

// function mapStateToProps( { filterValues } ){
// 	return { filterValues };
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchOffers }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter);
