import React from 'react';
import './App.css';
import Store from './stores/mainStore';
import Controls from "./components/Controls";
import TableContainer from "./components/TableContainer";

let appStore = new Store();
function App() {
  return (
    <div className="App">
      <Controls store={appStore} />
      <TableContainer store={appStore} />
    </div>
  );
}


export default App;
