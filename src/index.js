import React from 'react'
import './index.css'
import ReactDOM from "react-dom";
import Demo from './demo'
import Card from './Card'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
ReactDOM.render(
   
  <React.StrictMode>
    <BrowserRouter>
   <Routes>
  <Route path="/" element={<App />}>
    <Route path="demo" element={<Demo/>} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
