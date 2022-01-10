import { useReducer } from "react";

import Context from "./Context";

const initial = {
  wordCount: 0,
  charCount: 0,
  minuteToRead: 0,
};

const textReducer = (state, action) => {
  let word_count, char_count, minute_to_read;
  if (action.type === "WORD_COUNT") {
    word_count = action.string
      .split(/[\s+]/)
      .filter((chr) => chr !== "").length;
    return {
      wordCount: word_count,
      char_count: state.charCount,
      minuteToRead: state.minuteToRead,
    };
  }
  if (action.type === "CHAR_COUNT") {
    char_count = action.string.match(/\w/g).length;
    return {
      wordCount: state.wordCount,
      charCount: char_count,
      minuteToRead: state.minuteToRead,
    };
  }
  if (action.type === "MINUTE_TO_READ") {
    minute_to_read = state.wordCount / 200;
    return {
      wordCount: state.wordCount,
      charCount: state.charCount,
      minuteToRead: minute_to_read.toFixed(1),
    };
  }
  return initial;
};

function ContextProvider(props) {
  const [textState, dispatchtextState] = useReducer(textReducer, initial);

  const wordCountFunc = (str) => {
    dispatchtextState({ type: "WORD_COUNT", string: str });
  };

  const charCountFunc = (str) => {
    dispatchtextState({ type: "CHAR_COUNT", string: str });
  };

  const minuteToReadFunc = (str) => {
    dispatchtextState({ type: "MINUTE_TO_READ", string: str });
  };

  const ContextValue = {
    wordCount: textState.wordCount,
    charCount: textState.charCount,
    minuteToRead: textState.minuteToRead,
    wordCountFunc: wordCountFunc,
    charCountFunc: charCountFunc,
    minuteToReadFunc: minuteToReadFunc,
  };

  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
