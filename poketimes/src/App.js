import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Create from './components/Create'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Post/:post_id' component={Post} />
            <Route path='/Create' component={Create} />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
