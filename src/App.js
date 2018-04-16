import React, { Component } from 'react';
import './App.css';

import { Strip, Panel, Character, Balloon } from 'react-komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class App extends Component {
  render() {
    return (
      <Strip title="React Komik!" column="2" fontFamily="Patrick Hand" fontSize="13" upperCase={true}>
        <Panel>
            <Character
                image={imgUrl + 'char1.png'}
                left="70"
                scale="0.65">
                <Balloon 
                    left="-80" 
                    height="120" 
                    image={imgUrl + 'chat_left.svg'}
                    text="Have about ReactJS? You can write HTML in JS..."/>
            </Character>
        </Panel>
        <Panel>
            <Character
                image={imgUrl + 'char2.png'}
                left="30"
                scale="0.65">
                <Balloon
                    height="160"
                    left="60"
                    bottom="-110"
                    image={imgUrl + 'chat_right.svg'}
                    text="Yeah it's pretty cool. You can use JSX syntax to write web, mobile app, even presentation"
                    />
            </Character>
        </Panel>
        <Panel>
            <Character
                image={imgUrl + 'char1_hype.png'}
                scale="0.9"
                left="30">
                <Balloon
                    height="130"
                    left="-40"
                    image={imgUrl + 'chat_left.svg'}
                    text="Hey look! It's React Komik! We can create this comic strip with ReactJS!"
                    />
            </Character>
        </Panel>
        <Panel>
            <Character
                image={imgUrl + 'char2_magic.png'}
                scale="0.65">
                <Balloon
                    height="80"
                    left="80"
                    image={imgUrl + 'chat_right.svg'}
                    text="It's MAGIC"
                    />
            </Character>
        </Panel>
        <Character image={imgUrl + 'footer.png'} align="center" bottom="20" scale="0.8" />
    </Strip>
    );
  }
}

export default App;
