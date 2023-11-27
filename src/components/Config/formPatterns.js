import * as Config from './Config';



function getMajorMode(curKey, curMode) {
  switch (curMode) {
    case 'Natural':
      return Config.NaturalMajorKeys[curKey];
    case 'Pentatonic':
      return Config.PentatonicMajorKeys[curKey];
    case 'Blues':
      return Config.BluesMajorKeys[curKey];
    default:
      return null;
  }
}

function getMinorMode(curKey, curMode) {
  switch (curMode) {
    case 'Natural':
      return Config.NaturalMinorKeys[curKey];
    case 'Pentatonic':
      return Config.PentatonicMinorKeys[curKey];
    case 'Blues':
      return Config.BluesMinorKeys[curKey];
    default:
      return null;
  }
}



function getMajorScaleChords(curKey, curMode) {

  switch (curMode) {
    case 'Natural':
      return Config.NaturalMajorChords[curKey];
    case 'Pentatonic':
      return Config.PentatonicMajorChords[curKey];
    case 'Blues':
      return Config.BluesMajorChords[curKey];
    default:
      return null;
  }
}

function getMinorScaleChords(curKey, curMode) {
  switch (curMode) {
    case 'Natural':
      return Config.NaturalMinorChords[curKey];
    case 'Pentatonic':
      return Config.PentatonicMinorChords[curKey];
    case 'Blues':
      return Config.BluesMinorChords[curKey];
    default:
      return null;
  }
}




export function getNotes(curKey, curScale, curMode) {
  switch (curScale) {
    case 'Major':
      return getMajorMode(curKey, curMode);
    case 'Minor':
      return getMinorMode(curKey, curMode);
    default:
      return null;
  }
}

export function getChords(curKey, curScale, curMode) {
  switch (curScale) {
    case 'Major':
      return getMajorScaleChords(curKey, curMode);
    case 'Minor':
      return getMinorScaleChords(curKey, curMode);
    default:
      return null;
  }
}


export function getChordNotes(scaleChords) {
  const selectedChordNotes = scaleChords.map(chord => {
    const [root, ext] = parseChord(chord);
    const defaultExt = ext || "M";
    return translatePositionToNote(root, Config.chordPatterns[defaultExt]);
  });

  const filteredChordNotes = selectedChordNotes.flat().filter((note, index, array) => array.indexOf(note) === index);

  return filteredChordNotes;
}

function parseChord(chord) {
  if (chord.includes("#/")) {
    return [chord.slice(0, 5), chord.substring(5)];
  } else {
    return [chord.slice(0, 1), chord.substring(1)];
  }
}

function translatePositionToNote(curKey, positions) {
  const notes = positions.map(position => {
    let note = Config.NaturalMajorKeys[curKey][position.substring(0, 1) - 1];

    if (position.substring(0, 2).includes("b")) {
      note = handleFlat(note);
    }

    if (position.substring(0, 2).includes("#")) {
      note = handleSharp(note);
    }

    return note;
  });

  return notes;
}

function handleFlat(note) {
  const current = Config.chromaticScale.indexOf(note);
  return current > 0 ? Config.chromaticScale[current - 1] : Config.chromaticScale[Config.chromaticScale.length - 1];
}

function handleSharp(note) {
  const current = Config.chromaticScale.indexOf(note);
  return current === Config.chromaticScale.length - 1 ? Config.chromaticScale[0] : Config.chromaticScale[current + 1];
}