import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import {Navbar} from "./components/Navbar.jsx";

class App extends React.Component {
    render() {
        return <div>
            <Navbar/>
            <p>Hello, React!</p>
        </div>
    }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
