import { createContext } from "react";

const defaultVal = {
  string : '',
  wordCount : 0,
  charCount : 0,
  minuteToRead : 0,
  wordCountFunc : () => {},
  charCountFunc : () => {},
  minuteToReadFunc : () => {},
}

const Context = createContext(defaultVal);

export default Context;