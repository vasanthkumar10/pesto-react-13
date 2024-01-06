import Cars from "./components/Cars";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cars />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
