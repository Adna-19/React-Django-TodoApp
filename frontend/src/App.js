import React from 'react';
import Header from './layout/Header'
import Todos from './components/Todos'
import About from './pages/About'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
 render() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <Todos />
        )}/>
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
 }
}

export default App;
