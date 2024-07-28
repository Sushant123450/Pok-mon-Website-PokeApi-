import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from "./context/AppContext"
import { BrowserRouter } from "react-router-dom";
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)
