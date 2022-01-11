import { createContext } from "react";

const defaultVal = {
  currentVal: "",
  wordCount: 0,
  charCount: 0,
  minuteToRead: 0,
  inputChangeFunc: () => {},
  convertFunc: () => {},
};

const Context = createContext(defaultVal);

export default Context;
