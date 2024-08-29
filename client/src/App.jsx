import Header from '../components/Header'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Landing from '../pages/Landing';
const App=() => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={
            <div className='h-screen flex justify-center items-center'>
              <Landing />
            </div>} 
          />
          <Route path='/signin' element={
            <div className='h-screen flex justify-center items-center'>
              <Signin />
            </div>} 
          />
          <Route path='/signup' element={
            <div className='h-screen flex justify-center items-center'>
              <Signup />
            </div>} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
