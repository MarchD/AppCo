import React from 'react';
import {AppRouter} from "./AppRouter";
import {Header} from "../Header";

const App = () => (
  <div className="app">
    <Header/>
    <AppRouter/>
  </div>
);

export default App;
