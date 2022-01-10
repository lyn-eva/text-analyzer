import { useContext } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Details from "./components/details/Details";
import ContextProvider from "./components/store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Main />
      <Details />
    </ContextProvider>
  );
}

export default App;
