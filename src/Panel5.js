import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel5 extends Component {
  render() {
  	return (
    	<Strip column="" title="" fontFamily="Patrick Hand" fontSize="13">
     		<Panel>
     			<Character image="Panel5-Faces.png" scale="0.4">
     				<Balloon 
              text="Do you think a gender change on a stick figure could help provide more depth to a story for certain readers? It is perhaps a little too simple."
              image={imgUrl + "chat_left.svg"} 
              height="155" 
              left="-160"
              bottom="-30"/>
            <Balloon 
              text="So let's add another dimension... Faces! Expressions help us register and empathize with emotions on a deeper level."
              image={imgUrl + "chat_right.svg"} 
              height="165" 
              left="120"
              bottom="-40" />
     			</Character>
     		</Panel>
     		<Panel>
     			<Character image="Panel5-EmptyFace.png" scale="0.4">
     				<Balloon 
              text="Frustatingly, many comics and graphic novels fail to portray realistic humans you'd see every day. Very few people look like the Caucasian model-like drawings above."
              image={imgUrl + "chat_left.svg"} 
              height="160" 
              left="-180"
              bottom="-100"/>
             <Balloon 
              text="Thus, it's hard for some groups of people to feel represented in media - racial minorities, gender nonconforming individuals, and more."
              image={imgUrl + "chat_right.svg"} 
              height="170" 
              left="100"
              bottom="-100"/>
     			</Character>
     			<Character image="Panel5-QuestionMark.png" scale="0.1" align="center" bottom="40"/>
     		</Panel>
     	</Strip>
    );
  }
}

export default Panel5;