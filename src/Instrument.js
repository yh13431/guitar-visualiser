import React from 'react';
import Display from './components/display/display';
import Selector from './components/selections/Select/Selector';
import { getNotes, getChords, getChordNotes } from './components/config/formPatterns'

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curKey: 'C',
      curScale: 'Major',
      curMode: 'Natural',
      curNotes: ["C", "D", "E", "F", "G", "A", "B"],
      musicSelectorNotes: ["C", "D", "E", "F", "G", "A", "B"],
      musicSelectorChords: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
      selectedNotes: [],
      selectedChords: []
    };
  }

  updateNotesAndChords = (key, scale, mode) => {
    const instrumentScaleNotes = getNotes(key, scale, mode);
    const instrumentScaleChords = getChords(key, scale, mode);
    this.setState({
      curNotes: instrumentScaleNotes,
      musicSelectorNotes: instrumentScaleNotes,
      musicSelectorChords: instrumentScaleChords
    });
  };

  handleKeySelect = (curKey) => {
    this.setState({ curKey });
    this.updateNotesAndChords(curKey, this.state.curScale, this.state.curMode);
  };

  handleScaleSelect = (curScale) => {
    this.setState({ curScale });
    this.updateNotesAndChords(this.state.curKey, curScale, this.state.curMode);
  };

  handleModeSelect = (curMode) => {
    this.setState({ curMode });
    this.updateNotesAndChords(this.state.curKey, this.state.curScale, curMode);
  };



  handleChordSelect = (selectedChords) => {
    this.setState({ selectedChords });
    let instrumentScaleNotes = selectedChords.length ? getNotes(this.state.curKey, this.state.curScale, this.state.curMode) : getNotes(this.state.curKey, this.state.curScale, this.state.curMode);
    let musicSelectorNotes = selectedChords.length ? getChordNotes(selectedChords, this.state.curNotes) : instrumentScaleNotes;
    this.setState({ musicSelectorNotes, curNotes: musicSelectorNotes });
  };

  render() {
    return (

      <div className="Instrument">
        <Selector onKeySelect={this.handleKeySelect}
          onScaleSelect={this.handleScaleSelect}
          onModeSelect={this.handleModeSelect}
          curNotes={this.state.musicSelectorNotes}
          musicScaleChords={this.state.musicSelectorChords}
          onChordSelect={this.handleChordSelect}/>

        <Display curKey={this.state.curKey}
          curScale={this.state.curScale}
          curMode={this.state.curMode}
          curNotes={this.state.curNotes}/>

        
      </div>
    );
  }
}

export default Instrument;