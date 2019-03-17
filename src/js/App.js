import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import HomePage from "./containers/HomePage";

const App = () => (
    <Provider store={store}>
        <HomePage />
    </Provider>
);

export default App;
