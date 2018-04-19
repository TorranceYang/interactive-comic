import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel9 extends Component {
	constructor(props) {
		super(props);
    this.state = {
      show: false
    };
	}

	toggleShow() {
		this.setState({show: !this.state.show});
	}

	renderFace() {
		if(this.state.show) {
			return <Character image="Panel6-EmptyMother.jpg" scale="0.32" left="280" bottom="3" />	
		}
		return <Character image="Panel9-Mother.png" scale="0.32" left="270" bottom="3"/>;
	}

	render() {
		return(
			<div>
				<Strip column="" title="" fontFamily="Patrick Hand" fontSize="13">
					<Panel>
						<Character image="Panel9-BestWeCouldHalf.png" left="3" bottom="40" scale="0.19"/>
						<Character image="Panel8-Arrival.jpg" scale="0.07" bottom="40" left="60"/>
						<Character image="Panel3-Moving.png" scale="0.4" left="160">
							<Balloon 
								text="What if the main character of 'The Best We Could Do' looked like YOUR mother?"
	            	image={imgUrl + "chat_left.svg"}
	            	left="-120"
	            	bottom="-30"
	            	height="130"/>
						</Character>
						<Character image="Panel9-Mother.png" scale="0.32" left="270" bottom="3"/>
					</Panel>
					<Panel>
						<Character image="Panel9-BestWeCouldHalf.png" left="3" bottom="40" scale="0.19"/>
						<Character image="Panel8-Arrival.jpg" scale="0.07" bottom="40" left="60"/>
						<Character image="Panel3-Stopped.png" scale="0.4" left="200">
							<Balloon 
								text="The idea is compelling, isn't it?"
	            	image={imgUrl + "chat_left.svg"}
	            	left="-80"
	            	bottom="-20"
	            	height="90"/>
						</Character>
						{this.renderFace()}
					</Panel>
				</Strip>
				<button type="button" className="btn btn-dark right" onClick={this.toggleShow.bind(this)}> Try It!</button>
			</div>
			);
	}
}

export default Panel9;