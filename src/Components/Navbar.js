import React,{useState} from 'react';
import Home from './Home';
import About from './About';
import Info from './Info';
import Service from './Service';
import Contact from './Contact';
import {BrowserRouter as Router, Link,} from 'react-router-dom';


const Navbar = () => {
    const[active, setActive] =useState("start");
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid container">
                        <Link className="navbar-brand" href="#">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>setActive("start")}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>setActive("about")}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>setActive("info")}>Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>setActive("service")}>Info</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>setActive("contact")}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
            
            <div>
                {active ==="start" && <Home    props="Home page"/>}
                {active ==="about" && <About   props="About page"/>}
                {active ==="info" && <Info    props="Service page"/>}
                {active ==="service" && <Service props="Info page"/>}
                {active ==="contact" && <Contact props="Contact page"/>}
            </div>
            
        </div>
    )
}

export default Navbar
