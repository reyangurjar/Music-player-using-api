import React from 'react'
import './index.css'
import ReactDOM from "react-dom";
import Video_details from './Video_details'
import Card from './Card'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import App from './App'
ReactDOM.render(
   
  <React.StrictMode>
    {/* <BrowserRouter>
   <Routes>
  <Route path="/" element={<App />}>
    <Route path="Song_audio" element={<Song_audio/>} />
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
  </BrowserRouter> */}
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
