import React from 'react';

import './Selector.css';
import KeySelector from '../key/KeySelector';
import ScaleSelector from '../scale/ScaleSelector';
import ModeSelector from '../mode/ModeSelector';
import ChordSelector from '../chord/ChordSelector';

  class Selector extends React.Component {
    constructor(props) {
      super(props);
  
      // get all methods starting with 'handle' from the instance
      const handlers = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        .filter(methodName => methodName.startsWith('handle'));
  
      // bind each handler function to the current instance
      handlers.forEach(handler => {
        this[handler] = this[handler].bind(this);
      });
    }
  
    handleKeySelect(keyValue) {
      this.props.onKeySelect(keyValue);
    }
  
    handleScaleSelect(scaleValue) {
      this.props.onScaleSelect(scaleValue);
    }
  
    handleModeSelect(scaleTypeValue) {
      this.props.onModeSelect(scaleTypeValue);
    }
  
    handleChordSelect(currentChords) {
      this.props.onChordSelect(currentChords);
    }




  render() {
    return (
      <div className="Selector">
        <div className='keyscalemode'>
          <KeySelector handleKeySelect={this.handleKeySelect}/>
          <ScaleSelector handleScaleSelect={this.handleScaleSelect}/>
          <ModeSelector handleModeSelect={this.handleModeSelect}/>
        </div>
        <div className='chords'>
          <ChordSelector chords={this.props.musicScaleChords} handleChordSelect={this.handleChordSelect}/>
        </div>
        
      </div>
    );
  }
}

export default Selector;
