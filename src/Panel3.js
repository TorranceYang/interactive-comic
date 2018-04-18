import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel2 extends Component {
  render() {
    return (
      <Strip column="2" title="" fontFamily="Patrick Hand" fontSize="13">
        <Panel>
          <Character image="Panel3-Moving.png" scale="0.4">
            <Balloon 
              text="I hope you enjoyed that, its a sneak peek for what about to come."
              image={imgUrl + "chat_left.svg"} 
              height="120" 
              left="-110"
              bottom="-20"/>
            <Balloon 
              text="It's taken a disgusting amount of time to put this together."
              image={imgUrl + "chat_right.svg"} 
              height="123" 
              left="40"
              bottom="-40" />
          </Character>
        </Panel>
        <Panel>
          <Character image="Panel3-Stopped.png" scale="0.4">
            <Balloon 
              text="I'm serious. I never want to see a line of code ever again."
              image={imgUrl + "chat_right.svg"} 
              height="123" 
              left="40"
              bottom="-40" />
          </Character>
        </Panel>
        <Panel>
          <Character image="Panel3-Stopped.png" scale="0.4" />
        </Panel>
        <Panel>
          <Character image="Panel3-Moving.png" scale="0.4">
            <Balloon 
              text="Imagine the possibilities for interactive story telling"
              image={imgUrl + "chat_left.svg"} 
              height="110" 
              left="-110"
              bottom="-20"/>
            <Balloon 
              text="A common criticism of comics focuses on the dominance of stories from male perspectives. "
              image={imgUrl + "chat_right.svg"} 
              height="150" 
              left="20"
              bottom="-50" />
          </Character>
        </Panel>
      </Strip>
    );
  }
}

export default Panel2;
