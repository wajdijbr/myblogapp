import HomePage from "./pages/HomePage";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AppRouter from "./AppRouter";
import {  BrowserRouter } from "react-router-dom"


function App() {

  
  return (
    <>
    <BrowserRouter>

    <AppRouter />
    </BrowserRouter>

    </>
  );
}

export default App;
