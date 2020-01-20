import React from 'react';
import './App.css';
import Table from './components/Table.jsx';
import Store from './stores/mainStore';
import Controls from "./components/Controls";

let appStore = new Store();
function App() {
  return (
    <div className="App">
      <Controls store={appStore} />
      <Table store={appStore} />
    </div>
  );
}


export default App;
