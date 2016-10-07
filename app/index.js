import './components.sass'
import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './views/Home.js'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

ReactDOM.render( <Routes />, document.getElementById('app'))
