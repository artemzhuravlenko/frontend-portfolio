import React from "react";
import { ThemeProvider } from '@emotion/react'
import theme from '@rebass/preset'

function App() {
  return <ThemeProvider theme={theme}>
    Hello World
  </ThemeProvider>
}

export default App;
