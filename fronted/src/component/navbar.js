import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"
import cartLogo from '../images/carts.png'

const Navbar = () => {
    const navigate = useNavigate()
    const cardata = localStorage.getItem("itemscart")
    console.log("cardata", cardata)

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/jpeg;base64,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" style={{ borderRadius: "50%" }} width="100" height="100" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/all_books"> Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authors">Authors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add_books">Add Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add_authors">Add Authors</NavLink>
                            </li>
                        </ul>
                        {!localStorage.getItem('user') ?
                            <form className='d-flex'>
                                <Link className='btn btn-dark mx-2' to="/signup" role="button">Signup</Link>
                                <Link className='btn btn-dark mx-2' to="/login" role="button">Login</Link>
                                {/* <img src={cartLogo} ></img> */}
                                <Link className='' to="#" role="button" >
                                    <img src={cartLogo} width="50" height="40" className="d-inline-block align-top" alt="image path not found" />
                                </Link>
                            </form>
                            :
                            <>
                                <button onClick={handleLogout} className='btn btn-dark'>Logout</button>
                                <h4 style={{ padding: "20px" }}>{JSON.parse(localStorage.getItem('user')).userInfo.first_name}</h4>
                                <Link className='' to="/cartlist" role="button" >
                                    <p style={{ color: "black", margin: "-13px", fontSize: "bold" }}>{cardata}</p>
                                    <img src={cartLogo} width="50" height="40" className="d-inline-block align-top" alt="image path not found" />
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;
