import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

//<Character image="Panel10-FinalFace.png">
					// </Character>
class Panel10 extends Component {
	render() {
		return (
			<Strip column="1" title="" fontFamily="Patrick Hand" fontSize="">
				<Panel height="100">
					<Character image="Panel10-FinalFace.png" scale="0.6" bottom="-350"/>
					<Character image="Panel10-Line1.png" scale="0.9" bottom="0"/>
					<Character image="Panel10-Line2.png" scale="0.9" bottom="40"/>
					<Character image="Panel10-Line3.png" scale="0.9" bottom="80"/>
					<Character image="Panel10-Line4.png" scale="0.9" bottom="120"/>
					<Character image="Panel10-Line5.png" scale="0.9" bottom="160"/>
				</Panel>
			</Strip>
			)
	}
}

export default Panel10;