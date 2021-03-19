import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import ToDo from './component/pages/ToDo/ToDo';
import Contact from './component/pages/Contact/Contact';
import About from './component/pages/About/About';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    test: true
  }
  handleTest = () => {
    this.setState({
      test: !this.state.test
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path="/" component={ToDo} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/about" component={About} exact/>
        <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;