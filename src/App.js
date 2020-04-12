import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import {store} from "./store";
import Header from "./components/Header";
import SectionBanner from "./components/SectionBanner";

function App() {
  return (
    <Provider store={store}>
      <div className='App' >
        <Header />
        hello
        <SectionBanner />
      </div>
    </Provider>
  )
}

export default App;
