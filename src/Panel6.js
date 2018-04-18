import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel6 extends Component {
	render() {
		return (
			<Strip column="1" title="" fontFamily="Patrick Hand" fontSize="13">
				<Panel height="100">
					<Character image="Panel6-Makeface.png" scale="0.6" bottom="100"/>
					<Character image="Panel6-Bottom.png" scale="0.4" bottom="-300"/>
					<Character image="Panel6-Hair1.png" scale="0.7" left="30"/>
					<Character image="Panel6-Hair2.png" scale="0.7" left="330"/>
					<Character image="Panel6-Hair3.png" scale="0.7" left="30" bottom="-100"/>
					<Character image="Panel6-Hair4.png" scale="0.7" left="330" bottom="-100"/>
					<Character image="Panel6-Nose1.png" scale="0.3" left="30" bottom="-150"/>
					<Character image="Panel6-Nose2.png" scale="0.3" left="60" bottom="-150"/>
					<Character image="Panel6-Nose3.png" scale="0.3" left="30" bottom="-180"/>
					<Character image="Panel6-Nose4.png" scale="0.3" left="60" bottom="-180"/>
					<Character image="Panel6-Eyes1.png" scale="0.7" left="330" bottom="-150"/>
					<Character image="Panel6-Eyes2.png" scale="0.7" left="390" bottom="-150"/>
					<Character image="Panel6-Eyes3.png" scale="0.7" left="330" bottom="-180"/>
					<Character image="Panel6-Eyes4.png" scale="0.7" left="390" bottom="-180"/>
					<Character image="Panel6-Mouth1.png" scale="0.45" left="170" bottom="-150"/>
					<Character image="Panel6-Mouth2.png" scale="0.45" left="230" bottom="-150"/>
					<Character image="Panel6-Mouth3.png" scale="0.45" left="170" bottom="-180"/>
					<Character image="Panel6-Mouth4.png" scale="0.45" left="230" bottom="-180"/>
					<Character image="Panel6-EmptyFace.png" align="center" bottom="-100" scale="0.45"/>
				</Panel>
			</Strip>
		);
	}
}

export default Panel6;