import React from 'react'
import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Addbook from './components/Addbook';
import Books from './components/Book/Books';
import Aboutus from './components/Aboutus';
function App() {
  return (
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/add' element={<Addbook/>} exact/>
            <Route path='/books' element={<Books/>} exact/>
            <Route path='/aboutus' element={<Aboutus/>} exact/>
          </Routes>
        </main>
      </React.Fragment>
  );
}

export default App;
