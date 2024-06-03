import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import{Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-default">
				<div class="container-fluid">
				<div class="navbar-header">
					<Link class="navbar-brand" to={"/"}></Link>
				</div>
				<ul class="nav navbar-nav">
					<li class="active"><Link to={"/"}>Home</Link></li>
					<li><Link to="/login">Sign In</Link></li>
					<li><Link to="/signup">Sign Up</Link></li>
				</ul>
				</div>
	</nav>
  )
}

export default Navbar