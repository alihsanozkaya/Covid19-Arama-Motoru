import React from "react";
import Modal from "./Modal";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <Modal />
    </ContextProvider>
  );
}

export default App;
