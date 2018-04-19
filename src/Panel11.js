import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

//<Character image="Panel10-FinalFace.png">
					// </Character>
class Panel11 extends Component {
	render() {
		return (
			<Strip column="1" title="" fontFamily="Patrick Hand" fontSize="">
				<Panel >
					<Character image="Panel11-Line1.png" scale="0.9" bottom="80"/>
					<Character image="Panel11-Line2.png" scale="0.9" bottom="40"/>
				</Panel>
			</Strip>
			)
	}
}

export default Panel11;