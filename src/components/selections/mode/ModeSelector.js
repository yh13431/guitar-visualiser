import React from 'react';
import Select from 'react-select';
import './ModeSelector.css';

const modes = [
  { value: 'Natural', label: 'Natural' },
  { value: 'Pentatonic', label: 'Pentatonic' }
];


class ModeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.props.handleModeSelect(event.value);
  }

  render() {
    return (
      <div className="mode-select">
        <h3 className="mode">Mode</h3>
        <Select options={modes}
          defaultValue={{label: "Natural", value: "Natural"}}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default ModeSelector;