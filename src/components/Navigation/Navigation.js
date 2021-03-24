import React from 'react';
import { Link } from 'react-scroll';
import './navigation.css'
import MenuIcon from '@material-ui/icons/Menu';


function toggleDrawer() {
    let drawer = document.getElementById('drawer');
    drawer.style.transform = "translate(0)";
}

function closeDrawer() {
    let drawer = document.getElementById('drawer');
    drawer.style.transform = "translate(250px)";
}

const Navigation = () => {
    return (
        <>
            <header className="nav">
                <div className="nav-container">
                    <div className="nav-brand">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='scroll-links'
                            activeClass='active-link'
                        >
                            <img src="" />
                        </Link>
                    </div>
                </div>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='scroll-links'
                                activeClass='active-link'
                            >
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='scroll-links'
                                activeClass='active-link'
                            >
                                About
                        </Link>
                        </li>
                        <li>
                            <Link
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='scroll-links'
                                activeClass='active-link'
                            >
                                Work
                        </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='scroll-links'
                                activeClass='active-link'
                            >
                                Contact
                        </Link>
                        </li>
                    </ul>
                    <div className="menuIcon">
                        <button onClick={() => toggleDrawer()}> <MenuIcon /> </button>
                    </div>
                </div>
            </header>
            <div id="drawer">
                <ul class="drawer-list">
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='scroll-links'
                            activeClass='active-link'
                            onClick={() => closeDrawer()}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='scroll-links'
                            activeClass='active-link'
                            onClick={() => closeDrawer()}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="work"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='scroll-links'
                            activeClass='active-link'
                            onClick={() => closeDrawer()}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='scroll-links'
                            activeClass='active-link'
                            onClick={() => closeDrawer()}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;