import { useReducer, useState } from "react";

import Context from "./Context";

const initial = {
  currentVal: "",
  wordCount: 0,
  charCount: 0,
  minuteToRead: 0,
  darkMode: false,
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
        const titleCase = state.currentVal.replaceAll(
          /\S+/g,
          (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
          );
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
      case "COPY":
        if (navigator.clipboard) {
          navigator.clipboard.writeText(state.currentVal);
        } else {
        // fallback
        document.execCommand("copy");
      }
      return state;
    case "CLEAR":
      return {
        ...state,
        currentVal: "",
        wordCount: 0,
        charCount: 0,
        minuteToRead: 0,
      };
    }
  return initial;
};

function ContextProvider(props) {
  const [details, dispatchdetails] = useReducer(textReducer, initial);
  const [textareaRef, setTextareaRef] = useState(null);

  const inputChangeFunc = (str) => {
    dispatchdetails({ type: "INPUT_CHANGE", string: str });
  };

  const convertFunc = (type) => {
    dispatchdetails({ type: type });
  };

  const setTextAreaRef = (ref) => {
    setTextareaRef(ref);
  };

  const selectTxtFunc = (searchKey) => {
    const pos = details.currentVal.search(searchKey);
    textareaRef.setSelectionRange(pos, pos + searchKey.length);
    textareaRef.focus();
  };

  const ContextValue = {
    currentVal: details.currentVal,
    wordCount: details.wordCount,
    charCount: details.charCount,
    minuteToRead: details.minuteToRead,
    inputChangeFunc: inputChangeFunc,
    convertFunc: convertFunc,
    selectTxtFunc: selectTxtFunc,
    setTextAreaRef: setTextAreaRef,
  };

  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
