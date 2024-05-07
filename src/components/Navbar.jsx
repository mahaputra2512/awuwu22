import React, { useEffect, useState } from "react"
import '../assets/homepage.scss';
import { AiOutlineMenu } from "react-icons/ai"
import { Link, useHistory } from "react-router-dom"
import logo from "../assets/logo1.png"
// import '../assets/bg.scss';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [shown, setShown] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        window.location.reload();
    }

    const handleShown = () => {
        setShown(!shown);
    }

    const history = useHistory();

    const handleNavClick = (event) => {
      // Prevent the default behavior of the link, which would navigate
      // to the new page without reloading it
      event.preventDefault();
  
      // Get the path of the clicked link
      const path = event.target.pathname;
  
      // Navigate to the new page
      history.push(path);
  
      // Reload the page
      window.location.reload();
    };


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener("scroll", handleShadow)
    }, [])

    let isShown = true;

    function toggleMobileNavbar() {
        isShown = !isShown;
    }


    return (
        <>
            <div className={shadow ? "fixed w-full h-[73px] backdrop-blur-sm shadow-xl z-[100]" : "fixed w-full h-[73px] z-[100] tex"}>
                <nav class="navbar">
                    <img src={logo} className="logo" width="100" height="10" alt="" />
                    <div className={shown? "nav-links isShown": "nav-links"}>
                        <ul class="nav-menu">
                            <li className="active mhov" data-hover="Click me!"><span><Link onClick={handleNavClick} to="/">Home</Link></span></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="https://drive.google.com/drive/folders/1xbIEg9X2IPyJWEHeRAw7t0ff33F-tAyo" target="_blank" rel="noopener noreferrer">Rules</a></li>
                            <li><a href="https://drive.google.com/drive/folders/1p0ahpo61dfFe0GK7HhaFqYr0Nt9o2NgK?usp=share_link" target="_blank" rel="noopener noreferrer">Gallery</a></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="minictf">Mini CTF</Link></li>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                    <i class='bx bx-grid-alt menu-hamburger fa fa-bars' aria-hidden="true" onClick={handleShown}>
                    </i>
                </nav>
            </div>
        </>
    )
}

export default Navbar;