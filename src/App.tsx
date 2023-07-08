import React from 'react';
import Masthead from "./Masthead";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Masthead/>
    </ThemeProvider>
  );
}

export default App;
