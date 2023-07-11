import React from "react"
import Login from "./Components/Login/Login"
import Data from "./Components/data/data"
import { Route, Routes } from "react-router-dom"

// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  )
}

export default App
