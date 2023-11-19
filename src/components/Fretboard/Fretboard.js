import React from 'react';
import './Fretboard.css';


const Fret = ({ element, curNotes }) => {
  return (
    <div
      className={
        "fret" +
        (curNotes.includes(element) ? " key" : " blank") +
        (curNotes[0] === element ? " root" : "")
      }
    >
      <div className="note">{element}</div>
    </div>
  );
};

const String = ({ notes, curNotes }) => {
  const frets = notes.map((element, j) => (
    <Fret key={j} element={element} curNotes={curNotes} />
  ));

  return <div className="string">{frets}</div>;
};

const Fretboard = (props) => {
  const octaveNotes = ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb'];
  const eStandard = [0, 5, 10, 3, 7, 0];
  const strings = new Array(6).fill().map(() => {
    let note = eStandard.shift();
    const frets = new Array(25).fill().map(() => {
      if (note === octaveNotes.length) {
        note = 0;
      }
      return octaveNotes[note++];
    });
    return frets;
  });

  const rows = strings.map((notes, i) => <String key={i} notes={notes} curNotes={props.curNotes} />);

  return (
    <div className="FretboardContainer">
      <div className="fretboard">{rows}</div>
    </div>
  );
};

export default Fretboard;
