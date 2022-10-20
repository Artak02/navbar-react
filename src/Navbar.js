import React from "react";
import Img from "./img/logo.svg"


function Navbar() {

    const [toggle, setToggle] = React.useState(false)

    function navToggle() {
        setToggle(!toggle)
    }

    return (
        <nav>
          <div className="nav-center">
            <div className="nav-header">
                <img src={Img} className="logo" alt="logo"/>
                <button onClick={navToggle} className="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <ul className={toggle ? "show-links" : "links"}>
                <li>
                  <a href="index.html">home</a>
                </li>
                <li>
                  <a href="about.html">about</a>
                </li>
                <li>
                  <a href="projects.html">projects</a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-sketch"></i>
                  </a>
                </li>
              </ul>
        </div>
    </nav>
    )
}

export default Navbar