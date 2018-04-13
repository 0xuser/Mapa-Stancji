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
			price:{
				min: 0,
				max: 5000
			},
			persons: undefined,
			area: undefined
		};
	}

	typeChange({value}){
		this.setState({type: parseInt(value)});		

		if(value == 0){
			this.setState({area: undefined});
		} else if(value == 1){
			this.setState({persons: undefined});
		}
	}

	minPriceChange(e){
		const price = {...this.state.price}
		price.min = parseInt(e.target.value);
		this.setState({price});
	}
	maxPriceChange(e){
		const price = {...this.state.price}
		price.max = parseInt(e.target.value);
		this.setState({price});
	}

	minAreaChange(value){
		const area = {...this.state.area}
		area.min = parseInt(value);
		this.setState({area});
	}
	
	maxAreaChange(value){
		const area = {...this.state.area}
		area.max = parseInt(value);
		this.setState({area});
	}

	personsChange(persons){
		this.setState({persons});
	}

	componentDidMount(){
		this.props.fetchOffers(this.state);
	}

	componentDidUpdate(){
		this.props.fetchOffers(this.state);
	}
	
  render(){	
		return(
			<div className="c-filters">
				<div className="f-type filter">
					<div>
						<input 
							type="radio" 
							name="type" 
							id="room-type"
							value="0" 
							onChange={(e) => this.typeChange(e.target) }
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
							<PersonsInput 
								personsChange={value => this.personsChange(value)}
							/> : 
							<AreaInput 
								minChange={value => this.minAreaChange(value)} 
								maxChange={value => this.maxAreaChange(value)} 
							/>
						}
					</div>
				</div>

				<div className="f-price filter">
					<input type="number" name="min_price"
						min="0"
						value={this.state.price.min} 
						onChange={(e) => this.minPriceChange(e)}
					/>
					<input type="number" name="max_price" 
						min="0"
						value={this.state.price.max} 
						onChange={(e) => this.maxPriceChange(e)}
					/>
				</div>
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
