import React from 'react';
import Quiz from './components/Quiz';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='/quiz' element={<Quiz/>}></Route>
     </Routes>
  </BrowserRouter>

  );
}
export default App;
