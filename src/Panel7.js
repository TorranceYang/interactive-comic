import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel7 extends Component {
	render() {
			return(
				<Strip column="2" title="" fontFamily="Patrick Hand" fontSize="13">
					<Panel>
          	<Character image="Panel7-MyFace.png" scale="0.4">
	            <Balloon 
	              text="This goofy face is one my favorite creations."
	              image={imgUrl + "chat_left.svg"} 
	              height="110" 
	              left="-80"
	              bottom="-60"/>
	            <Balloon 
	              text="... Maybe it doesn't help reinforce my point."
	              image={imgUrl + "chat_right.svg"} 
	              height="123" 
	              left="40"
	              bottom="-40" />
          	</Character>
        	</Panel>
        	<Panel>
          	<Character image="Panel7-MyFace.png" scale="0.4">
          		<Balloon 
	              text="I'm limited by time and my artistic ability to show the possibilities for this."
	              image={imgUrl + "chat_left.svg"} 
	              height="120" 
	              left="-80"
	              bottom="-60"/>
	            <Balloon 
	              text="Let me switch back to something a bit more serious. "
	              image={imgUrl + "chat_right.svg"} 
	              height="118	" 
	              left="60"
	              bottom="-80" />
          	</Character>
        	</Panel>
        	<Panel>
          	<Character image="Panel1-Stick-Close.png" scale="0.1">
          		<Balloon 
	              text="Ahem.. Back on topic. Connection and empathy are crucial in discussions of portraying race and culturally sensitive stories."
	              image={imgUrl + "chat_right.svg"} 
	              height="170" 
	              left="80"
	              bottom="-60"/>
          	</Character>
        	</Panel>
        	<Panel>
          	<Character image="Panel1-Stick-Close.png" scale="0.1">
          		<Balloon 
	              text="For example, many of us are closely tied to asian immigrant experience."
	              image={imgUrl + "chat_right.svg"} 
	              height="140" 
	              left="80"
	              bottom="-60"/>
          	</Character>
        	</Panel>
				</Strip>
				);
	}
}

export default Panel7;