import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './ui/Header';
import theme from './ui/Theme'
import {ThemeProvider} from '@material-ui/styles'

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Header />
    </ThemeProvider>
  );
}

