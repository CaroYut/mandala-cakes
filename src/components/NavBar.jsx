import CartWidget from "./CartWidget";
import logo from "./imagenes/logo03.jpeg";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (

<div className = "container">
    <div className = "row">
         <div className = "col">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to= {"/"}> <img src={logo} alt="Mandala Cakes"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" activeClassName = {"active"} aria-current="page" to={"/"}> Inicio </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName = {"active"} to={"/categoria/Tortas"}> Tortas </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName = {"active"} to={"/categoria/Cheesecake"}> Cheesecakes </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName = {"active"} to={"/categoria/Brownie"}> Brownies</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="col d-flex align-items-center justify-content-end">  
            <CartWidget/>
        </div>
    </div>
</div>
    )



}
 
export default NavBar; 