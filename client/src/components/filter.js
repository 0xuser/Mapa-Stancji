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
			min_price: '',
			max_price: '',
			min_area: '',
			max_area: '',
			persons: '',
			search: false,
			room:0,
			flat: 0
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
		var state = this.state;
		
		if(e.target.type == "checkbox"){
			state[e.target.name] = e.target.checked;
		}else{
			state[e.target.name] = e.target.value;
		}

		this.setState({state: state});
		this.props.fetchOffers(this.state);		
		// console.log(this.state);
		
	}

	
  render(){
		return(
			<div className="c-filters">
				<form onChange={(e) => this.formChange(e)}>
					<div className="f-type filter">
						<div >
							<input 
								type="checkbox" 
								name="room" 
								id="room-type"
								value="0" 
							/>
							<label htmlFor="room-type">Pokój</label>

							<input 
								type="checkbox" 
								name="flat" 
								id="flat-type"
								value="1" 
							/>
							<label htmlFor="flat-type">Mieszkanie</label>
						</div>

						<div>
							{this.state.flat == 0? 
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
