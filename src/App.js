import React from "react";
import styled from "styled-components";

import { Chatbox } from "./components/Chatbox";

const Screen = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`

function App() {
  return (
    <Screen>
      <Chatbox />
    </Screen>
  );
}

export default App;
