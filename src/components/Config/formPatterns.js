import * as Config from './Config';



function getMajorMode(curKey, curMode) {
  switch (curMode) {
    case 'Natural':
      return Config.NaturalMajorKeys[curKey];
    case 'Pentatonic':
      return Config.PentatonicMajorKeys[curKey];
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
    default:
      return null;
  }
}




function getScaleFunction(curKey, curScale, curMode) {
  switch (curScale) {
    case 'Major':
      return curMode === 'Notes' ? getMajorMode(curKey, curMode) : getMajorScaleChords(curKey, curMode);
    case 'Minor':
      return curMode === 'Notes' ? getMinorMode(curKey, curMode) : getMinorScaleChords(curKey, curMode);
    default:
      return null;
  }
}

export function getNotes(curKey, curScale, curMode) {
  return getScaleFunction(curKey, curScale, curMode);
}

export function getChords(curKey, curScale, curMode) {
  return getScaleFunction(curKey, curScale, curMode);
}


