import React from 'react'
import Home from './Components/Home'
import{Route,Routes,Navigate,Link} from 'react-router-dom';
import Main from './Components/Main';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

const App = () => {
  return (
	<div>
		<Navbar />
		<Routes>
			<Route path='/' element={<Home />} >Home</Route>
			<Route path='/login' element={<Login />} >Home</Route>
			<Route path='/signup' element={<Signup />} >Home</Route>
		</Routes>

	</div>
  )
}

export default App