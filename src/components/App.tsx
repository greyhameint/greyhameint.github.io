import React from 'react';
import Masthead from "./Masthead";
import {ThemeProvider} from "@mui/material";
import theme from "../theme";
import Fold from "./Fold";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Masthead/>
      <Fold/>
    </ThemeProvider>
  );
}

export default App;
