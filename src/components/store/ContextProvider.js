import { useReducer } from "react";

import Context from "./Context";

const initial = {
  currentVal: "",
  wordCount: 0,
  charCount: 0,
  minuteToRead: 0,
};

const textReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      const word_count = action.string.split(/\s+/).filter((chr) => chr !== "");
      const char_count = action.string.match(/\S/g);
      const minute_to_read = state.wordCount / 200;
      return {
        currentVal: action.string,
        wordCount: word_count ? word_count.length : 0,
        charCount: char_count ? char_count.length : 0,
        minuteToRead: minute_to_read.toFixed(1),
      };
    case "TO_UPPERCASE":
      return {
        ...state,
        currentVal: state.currentVal.toUpperCase(),
      };
    case "TO_LOWERCASE":
      return {
        ...state,
        currentVal: state.currentVal.toLowerCase(),
      };
    case "TO_TITLECASE":
      const titleCase = state.currentVal.replaceAll(/\S+/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
      return {
        ...state,
        currentVal: titleCase,
      };
    case "REMOVE_EXTRA_SPACE":
      const removedSpaces = state.currentVal.split(/\s+/).join(" ");
      return {
        ...state,
        currentVal: removedSpaces,
      };
    case "CLEAR":
      return {
        ...state,
        currentVal: "",
      };
  }
  return initial;
};

function ContextProvider(props) {
  const [details, dispatchdetails] = useReducer(textReducer, initial);

  const inputChangeFunc = (str) => {
    dispatchdetails({ type: "INPUT_CHANGE", string: str });
  };

  const convertFunc = (type) => {
    dispatchdetails({ type: type });
  };

  const ContextValue = {
    currentVal: details.currentVal,
    wordCount: details.wordCount,
    charCount: details.charCount,
    minuteToRead: details.minuteToRead,
    inputChangeFunc: inputChangeFunc,
    convertFunc: convertFunc,
  };

  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
