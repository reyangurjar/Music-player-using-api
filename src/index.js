import React from 'react'
import './index.css'
import ReactDOM from "react-dom";
import demo from './demo'
import Card from './Card'
import {createMemoryHistory} from 'history';
import {
  Router as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App'
const history = createMemoryHistory();
ReactDOM.render(
   
  <React.StrictMode>
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route exact path="/" component={App} element={<App />} />
            <Route exact path="demo" component={demo} element={<demo/>} />
            <Route exact path="card" component={Card} element={<Card/>} />
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
