import React from 'react';
import { Link } from 'react-scroll';
import './navigation.css'

const Navigation = () => {
    return (
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
            </div>
        </header>
    )
}

export default Navigation;