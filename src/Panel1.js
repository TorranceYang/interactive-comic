import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel1 extends Component {
  render() {
    return (
      <Strip title="Everybody's Story" column="1" fontFamily="Patrick Hand" fontSize="13">
        <Panel>
          <Character image="Panel1-Stick.png" scale="0.4">
            <Balloon 
              text="Hello and welcome to my final project!" 
              image={imgUrl + "chat_left.svg"} height="100" left="-100" bottom="2"/>
            <Balloon 
              text="As you probably already have noticed, things are quite bare around here! But simplicity is compelling." 
              image={imgUrl + "chat_right.svg"} height="150" left="50"/>
          </Character>
        </Panel>
        <Panel>
          <Character image="Panel1-Stick-Close.png" scale="0.1">
            <Balloon 
              text="For instance, despite me using a separate asset for a close up, you still understand that I'm the same person." 
              image={imgUrl + "chat_left.svg"} height="150" left="-150"/>
            <Balloon 
              text="And, as we've talked about in class, my lack of features makes it easier for you to connect with me. I could be anyone." 
              image={imgUrl + "chat_right.svg"} height="150" left="90"/>
          </Character>
        </Panel>
      </Strip>
    );
  }
}

export default Panel1;
