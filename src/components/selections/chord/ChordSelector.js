import React from 'react';
import './ChordSelector.css';


class ChordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onChordSelect = this.onChordSelect.bind(this);
    this.state = {
      selectedChords: [],
    };
  }

  onChordSelect(event) {
    const { dataset } = event.currentTarget;
    const { selectedChords } = this.state;
    const isChordSelected = event.currentTarget.classList.toggle('selected');
  
    const updatedChords = isChordSelected
      ? [...selectedChords, dataset.chord]
      : selectedChords.filter(curChord => curChord !== dataset.chord);
  
    this.setState({ selectedChords: updatedChords }, () => this.props.handleChordSelect(updatedChords));
  }

  render() {
    return (
      <div className="chord-select">
        <h3 className="chords">
          Chords
        </h3>
          <ul className="chords-list">
            {this.props.chords.map(function(curChord) {
              return <li onClick={this.onChordSelect} className="chord-list-chord" data-chord={curChord} key={curChord}>{curChord}</li>;
            }, this)}
          </ul>
        </div>
    );
  }
}

export default ChordSelector;
