import React from 'react';
import {AppRouter} from "./AppRouter";
import {Header} from "../Header";
import {AppContainer} from "./AppContainer";
import {Footer} from "../Footer";

const App = () => (
    <AppContainer>
        <div className="app">
            <Header/>
            <AppRouter/>
            <Footer />
        </div>
    </AppContainer>
);

export default App;
