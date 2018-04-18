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
						<fieldset >
							<h3>typ</h3>
							<div>
								<label className="check-cont">Pokój
									<input type="checkbox" name="room" id="room-type" value="0"/>
									<span className="checkmark"></span>
								</label>
								<label className="check-cont">Mieszkanie
									<input type="checkbox" name="flat" id="flat-type" value="1"/>
									<span className="checkmark"></span>
								</label>
							</div>
						</fieldset>
					</div>
					
					<div className="f-info filter">
						<fieldset>
							<h3>ilość osób</h3>
							<div>
								<select name="persons">
									<option value="">-</option>
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</div>
						</fieldset>
						<fieldset>
							<h3>powierzchnia</h3>
							<div>
								<input type="text" name="min_area" min="0" placeholder="od"/>
								<input type="text" name="max_area" min="0" placeholder="do"/>
							</div>
						</fieldset>
						{/* <PersonsInput /> */}
						{/* <AreaInput /> */}
					</div>

					<div className="f-price filter">
						<fieldset>
							<h3>cena</h3>
							<div>
								<input type="text" name="min_price" placeholder="od" min="0"/>
								<input type="text" name="max_price" placeholder="do" min="0"/>
							</div>
						</fieldset>
						
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
