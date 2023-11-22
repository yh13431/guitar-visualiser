export const chordPatterns = {
    "M": ["1", "3", "5"],
   
    "m": ["1", "3b", "5"],
   
    "dim": ["1", "3b", "5b", "7b"]
  }
  
  
  // scales
  export const chromaticScale = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
  export const c = ["C", "D", "E", "F", "G", "A", "B"];
  export const cs = ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"];
  export const d = ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"];
  export const ds = ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"];
  export const e = ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"];
  export const f = ["F", "G", "A", "A#/Bb", "C", "D", "E", "F"];
  export const fs = ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "F"];
  export const g = ["G", "A", "B", "C", "D", "E", "F#/Gb"];
  export const gs = ["G#/Ab", "Bb", "C", "C#/Db", "D#/Eb", "F", "G"];
  export const a = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"];
  export const as = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"];
  export const b = ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"];
  
  
  
  
  
  // all notes in major and minor scales
  export const NaturalMajorKeys = {"C": ["C", "D", "E", "F", "G", "A", "B"],
                        "C#/Db": ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"],
                        "D": ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"],
                        "D#/Eb": ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"],
                        "E": ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"],
                        "F": ["F", "G", "A", "A#/Bb", "C", "D", "E"],
                        "F#/Gb": ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "F"],
                        "G": ["G", "A", "B", "C", "D", "E", "F#/Gb"],
                        "G#/Ab": ["G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb", "F", "G"],
                        "A": ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"],
                        "A#/Bb": ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"],
                        "B": ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"]
                      };
  
  
  export const PentatonicMajorKeys = {"C": ["C", "D", "E", "G", "A"],
                        "C#/Db": ["C#/Db", "D#/Eb", "F", "G#/Ab", "A#/Bb"],
                        "D": ["D", "E", "F#/Gb", "A", "B"],
                        "D#/Eb": ["D#/Eb", "F", "G", "A#/Bb", "C"],
                        "E": ["E", "F#/Gb", "G#/Ab", "B", "C#/Db"],
                        "F": ["F", "G", "A", "C", "D", "E"],
                        "F#/Gb": ["F#/Gb", "G#/Ab", "A#/Bb", "C#/Db", "D#/Eb"],
                        "G": ["G", "A", "B", "D", "E"],
                        "G#/Ab": ["G#/Ab", "Bb", "C", "D#/Eb", "F"],
                        "A": ["A", "B", "C#/Db", "E", "F#/Gb"],
                        "A#/Bb": ["A#/Bb", "C", "D", "F", "G"],
                        "B": ["B", "C#/Db", "D#/Eb", "F#/Gb", "G#/Ab"]
                      };
  
  
  export const NaturalMinorKeys = {"C": ["C", "D", "D#/Eb", "F", "G", "G#/Ab", "A#/Bb"],
                                            "C#/Db": ["C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A", "B"],
                                            "D": ["D", "E", "F", "G", "A", "A#/Bb", "C"],
                                            "D#/Eb": ["D#/Eb", "F", "F#", "G#/Ab", "A#/Bb", "B", "C#/Db"],
                                            "E": ["E", "F#/Gb", "G", "A", "B", "C", "D"],
                                            "F": ["F", "G", "G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb"],
                                            "F#/Gb": ["F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D", "E"],
                                            "G": ["G", "A", "A#/Bb", "C", "D", "D#/Eb", "F"],
                                            "G#/Ab": ["G#/Ab", "Bb", "B", "C#/Db", "D#/Eb", "E", "F#/Gb"],
                                            "A": ["A", "B", "C", "D", "E", "F", "G"],
                                            "A#/Bb": ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"],
                                            "B": ["B", "C#/Db", "D", "E", "F#/Gb", "G", "A"]
                                          };
                      
  
  export const PentatonicMinorKeys = {"C": ["C", "D#/Eb", "F", "G", "A#/Bb"],
                                            "C#/Db": ["C#/Db", "E", "F#/Gb", "G#/Ab", "B"],
                                            "D": ["D", "F", "G", "A", "C"],
                                            "D#/Eb": ["D#/Eb", "F#", "G#/Ab", "A#/Bb", "C#/Db"],
                                            "E": ["E", "G", "A", "B", "D"],
                                            "F": ["F", "G#/Ab", "A#/Bb", "C", "D#/Eb"],
                                            "F#/Gb": ["F#/Gb", "A", "B", "C#/Db", "E"],
                                            "G": ["G", "A#/Bb", "C", "D", "F"],
                                            "G#/Ab": ["G#/Ab", "B", "C#/Db", "D#/Eb", "F#/Gb"],
                                            "A": ["A", "C", "D", "E", "G"],
                                            "A#/Bb": ["A#/Bb", "C#/Db", "D#/Eb", "F", "G#/Ab"],
                                            "B": ["B", "D", "E", "F#/Gb", "A"]
                                          };
  
  
  
  
  
  
  // chord progressions in major and minor scales
  export const NaturalMajorChords = {"C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
                                          "C#/Db": ["C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab", "A#/Bbm", "Cdim"],
                                          "D": ["D", "Em", "F#/Gbm", "G", "A", "Bm", "C#/Dbdim"],
                                          "D#/Eb": ["D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb", "Cm", "Ddim"],
                                          "E": ["E", "F#/Gbm", "G#/Abm", "A", "B", "C#/Dbm", "D#/Ebdim"],
                                          "F": ["F", "Gm", "Am", "A#/Bb", "C", "D", "Em", "Fdim"],
                                          "F#/Gb": ["F#/Gb", "G#/Abm", "A#/Bbm", "B", "C#/Db", "D#/Ebm", "Fdim"],
                                          "G": ["G", "Am", "Bm", "C", "D", "Em", "F#/Gbdim"],
                                          "G#/Ab": ["G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb", "Fm", "Gdim"],
                                          "A": ["A", "Bm", "C#/Dbm", "D", "E", "F#/Gbm", "G#/Abdim"],
                                          "A#/Bb": ["A#/Bb", "Cm", "Dm", "D#/Eb", "F", "Gm", "Adim"],
                                          "B": ["B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb", "G#/Abm", "A#/Bbdim"]
                                        };
                    
  export const PentatonicMajorChords = {"C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
                                          "C#/Db": ["C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab", "A#/Bbm", "Cdim"],
                                          "D": ["D", "Em", "F#/Gbm", "G", "A", "Bm", "C#/Dbdim"],
                                          "D#/Eb": ["D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb", "Cm", "Ddim"],
                                          "E": ["E", "F#/Gbm", "G#/Abm", "A", "B", "C#/Dbm", "D#/Ebdim"],
                                          "F": ["F", "Gm", "Am", "A#/Bb", "C", "D", "Em", "Fdim"],
                                          "F#/Gb": ["F#/Gb", "G#/Abm", "A#/Bbm", "B", "C#/Db", "D#/Ebm", "Fdim"],
                                          "G": ["G", "Am", "Bm", "C", "D", "Em", "F#/Gbdim"],
                                          "G#/Ab": ["G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb", "Fm", "Gdim"],
                                          "A": ["A", "Bm", "C#/Dbm", "D", "E", "F#/Gbm", "G#/Abdim"],
                                          "A#/Bb": ["A#/Bb", "Cm", "Dm", "D#/Eb", "F", "Gm", "Adim"],
                                          "B": ["B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb", "G#/Abm", "A#/Bbdim"]
                                        };
                    
  export const NaturalMinorChords = {"C": ["Cm", "Ddim", "D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb"],
                                          "C#/Db": ["C#/Dbm", "D#/Ebdim", "E", "F#/Gbm", "G#/Abm", "A", "B"],
                                          "D": ["Dm", "Edim", "F", "Gm", "Am", "A#/Bb", "C"],
                                          "D#/Eb": ["D#/Ebm", "Fdim", "F#", "G#/Abm", "A#/Bbm", "B", "C#/Db"],
                                          "E": ["Em", "F#/Gbdim", "G", "Am", "Bm", "C", "D"],
                                          "F": ["Fm", "Gdim", "G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb"],
                                          "F#/Gb": ["F#/Gbm", "G#/Abdim", "A", "Bm", "C#/Dbm", "D", "E"],
                                          "G": ["Gm", "Adim", "A#/Bb", "Cm", "Dm", "D#/Eb", "F"],
                                          "G#/Ab": ["G#/Abm", "Bbdim", "B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb"],
                                          "A": ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
                                          "A#/Bb": ["A#/Bbm", "Cdim", "C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab"],
                                          "B": ["Bm", "C#/Dbdim", "D", "Em", "F#/Gbm", "G", "A"]
                                        };
                    
                    
  export const PentatonicMinorChords = {"C": ["Cm", "D#/Eb", "Fm", "Gm", "A#/Bb"],
                                          "C#/Db": ["C#/Dbm", "E", "F#/Gbm", "G#/Abm", "B"],
                                          "D": ["Dm", "F", "Gm", "Am", "C"],
                                          "D#/Eb": ["D#/Ebm", "F#", "G#/Abm", "A#/Bbm", "C#/Db"],
                                          "E": ["Em", "G", "Am", "Bm", "D"],
                                          "F": ["Fm", "G#/Ab", "A#/Bbm", "Cm", "D#/Eb"],
                                          "F#/Gb": ["F#/Gbm", "A", "Bm", "C#/Dbm", "E"],
                                          "G": ["Gm", "A#/Bb", "Cm", "Dm", "F"],
                                          "G#/Ab": ["G#/Abm", "B", "C#/Dbm", "D#/Ebm", "F#/Gb"],
                                          "A": ["Am", "C", "Dm", "Em", "G"],
                                          "A#/Bb": ["A#/Bbm", "C#/Db", "D#/Ebm", "Fm", "G#/Ab"],
                                          "B": ["Bm", "D", "Em", "F#/Gbm", "A"]
                                        };