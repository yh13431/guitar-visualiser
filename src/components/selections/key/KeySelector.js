import React from 'react';
import Select from 'react-select';
import './KeySelector.css';

const keys = [
  { value: 'C', label: 'C'},
  { value: 'C#/Db', label: 'C#/Db'},
  { value: 'D', label: 'D'},
  { value: 'D#/Eb', label: 'D#/Eb'},
  { value: 'E', label: 'E'},
  { value: 'F', label: 'F'},
  { value: 'F#/Gb', label: 'F#/Gb'},
  { value: 'G', label: 'G'},
  { value: 'G#/Ab', label: 'G#/Ab' },
  { value: 'A', label: 'A'},
  { value: 'A#/Bb', label: 'A#/Bb' },
  { value: 'B', label: 'B' }
];
class KeySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
      this.props.handleKeySelect(event.value);
  }
  render() {
    return (
      <div className="key-select">
        <h3 className="key">Key</h3>
        <Select options={keys}
          defaultValue={{label: "C", value: "C"}}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default KeySelector;
