
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'


// icons 



function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashbord' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>

    

     
    </>
  )
}

export default App
