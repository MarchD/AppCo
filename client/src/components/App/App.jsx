import React from 'react';
import {AppRouter} from "./AppRouter";
import {Header} from "../Header";
import {AppContainer} from "./AppContainer";

const App = () => (
    <AppContainer>
        <div className="app">
            <Header/>
            <AppRouter/>
        </div>
    </AppContainer>
);

export default App;
