import React, { Component } from 'react';
import { Strip, Panel, Character, Balloon } from './modified_komik/Komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';

class Panel4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMale: true
    };
  }

  flipGender() {
    this.setState({isMale: !this.state.isMale});
  }

  getGenderImage() {
    if(this.state.isMale) {
      return "Panel4-Male.png";
    }
    return "Panel4-Female.png";
  }

  render() {
    return (
      <div>
        <Strip column="1" title="" fontFamily="Patrick Hand" fontSize="13">
          <Panel>
            <Character image={this.getGenderImage()} scale="0.4">
              <Balloon 
                text="So, why don't we try... mixing me up a little?"
                image={imgUrl + "chat_left.svg"} 
                height="100" 
                left="-110"
                bottom="-20"/>
              <Balloon 
                text="Press that button below this panel"
                image={imgUrl + "chat_right.svg"} 
                height="100" 
                left="40"
                bottom="-40" />
            </Character>
          </Panel>
          <Panel>
            <Character image={this.getGenderImage()} scale="0.4">
              <Balloon 
                text="Cool, huh?"
                image={imgUrl + "chat_left.svg"} 
                height="70" 
                left="-90"
                bottom="-20"/>
              <Balloon 
                text="Imagine the potential to create stories with this kind of technology!"
                image={imgUrl + "chat_right.svg"} 
                height="125" 
                left="40"
                bottom="-40" />
            </Character>
          </Panel>
        </Strip>
        <button type="button" className="btn btn-dark right" onClick={this.flipGender.bind(this)}> Click Me! </button>
      </div>
    );
  }
}

export default Panel4;
