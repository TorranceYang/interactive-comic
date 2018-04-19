import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel8 extends Component {
	render() {
		return ( 
			<Strip column="" title="" fontFamily="Patrick Hand" fontSize="13">
				<Panel>
					<Character image="Panel3-Moving.png" scale="0.4" left="100">
						<Balloon 
              text="Arguably, it might be easier for us to picture ourselves in these stories, or see characters as similar to people we might know."
              image={imgUrl + "chat_left.svg"} 
              height="150" 
              left="-125"
              bottom="-10"/>
					</Character>
					<Character image="Panel8-ABC.jpg" scale="0.05" bottom="40" left="160"/>
					<Character image="Panel8-TheBest.jpg" scale="0.25" bottom="40" left="250"/>
					<Character image="Panel8-Arrival.jpg" scale="0.07" bottom="40" left="350"/>
				</Panel>
				<Panel>
					<Character image="Panel3-Stopped.png" scale="0.4" left="100">
						<Balloon 
              text="What about for others who may not be able to call on such experiences? Can we enhance the emotional impact of comics?"
              image={imgUrl + "chat_left.svg"} 
              height="145" 
              left="-125"
              bottom="-15"/>
					</Character>
					<Character image="Panel8-ABC.jpg" scale="0.05" bottom="40" left="160"/>
					<Character image="Panel8-TheBest.jpg" scale="0.25" bottom="40" left="250"/>
					<Character image="Panel8-Arrival.jpg" scale="0.07" bottom="40" left="350"/>
				</Panel>
			</Strip>
			);
	}
}

export default Panel8;
 