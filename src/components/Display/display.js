import React from 'react';

import './display.css';
import Fretboard from '../Fretboard/Fretboard';

class Display extends React.Component{

  handleDisplayChange(event) {
    this.props.onKeySelect(event);
  }

  render() {

    return (
      <div className="display">
        <Fretboard curKey={this.props.curKey}
          curScale={this.props.curScale}
          curMode={this.props.curMode}
          curNotes={this.props.curNotes}/>
      </div>
    );
  }
}

export default Display;
