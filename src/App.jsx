import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.scss'
import Home from "./Components/Home"
import Header from "./Components/Header"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header/>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </Router>
  );
}

export default App
