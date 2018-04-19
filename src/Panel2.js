import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel2 extends Component {
  render() {
    return (
      <Strip column="1" title="" fontFamily="Patrick Hand" fontSize="13">
        <Panel>
          <Character image="Panel1-Stick-Close.png" scale="0.1">
            <Balloon 
              text="And, without being told, you know how to turn the page." 
              image={imgUrl + "chat_left.svg"} height="110" left="-100"/>
            <Balloon 
              text="Connection and interaction are two parts of comics that I believe can evolve in the coming years." 
              image={imgUrl + "chat_right.svg"} height="150" left="100" bottom="-120"/>
          </Character>
        </Panel>
        <Panel>
          <Character 
              image="Panel2-Hello.png" scale="0.27" bottom="50" />
          <Character image="Panel2-Stoppeed.png" scale="0.4">
            <Balloon 
              text="I've attempted to try something like that with this project." 
              image={imgUrl + "chat_left.svg"} bottom="-50  " height="110" left="-90"/>
            <Balloon 
              text="This entire comic is interactable with! Try moving me around." 
              image={imgUrl + "chat_right.svg"} height="130" left="60"/>
          </Character>
        </Panel>
      </Strip>
    );
  }
}

export default Panel2;
