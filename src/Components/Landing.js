import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Landing = () => {
    return (
        <section className="landing-style">
            <div className="container">
                <div className="page-container">
                    <div className="content-container">
                        <div className="landing-content">
                            <h3 className="animate__animated animate__fadeInLeft"> Hi, I'm Nikhil Kapadia</h3>
                            <h2 className="animate__animated animate__fadeInLeft"> A Full-Stack Developer. </h2>
                            <h5 className="animate__animated animate__fadeInUp"> Turn your <i> ideas </i> into <i> reality </i></h5>
                            <ul className="animate__animated animate__fadeInUp">
                                <li>
                                    <a href="https://www.github.com/astronik" target="_blank">
                                        <GitHubIcon style={{ fontSize: "27px" }}  className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/nikhilkapadia_/" target="_blank">
                                        <InstagramIcon style={{ fontSize: "30px" }} className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/NikhilKapadia_" target="_blank">
                                        <TwitterIcon style={{ fontSize: "30px" }} className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/nikhilkapadia-/" target="_blank">
                                        <LinkedInIcon style={{ fontSize: "30px" }} className="icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;