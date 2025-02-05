import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home'
// import About from './components/About';
// import Products from './components/Products';
import Todo from './Todo';
export const App = () => {
  return (
    <>
    <Todo/>
      {/* <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes> */}
    </>
  )
}
export default App;
