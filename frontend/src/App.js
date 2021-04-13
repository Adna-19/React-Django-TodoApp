import React from 'react';
import Header from './layout/Header'
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
 render() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
 }
}

export default App;
