import React from 'react';
import './about.css'
import me from './me.jpg'

const About = () => {
    return (
        <section className="container">
            <div className="page-container">
                <div className="content-container">
                    <div className="background-font animate__animated animate__fadeIn">
                        <h1 className="about"> about </h1>
                    </div>
                    <div className="about-container animate__animated animate__fadeIn">
                        {/* <h1> Me, Myself & I</h1> */}
                        <div className="about-layout">
                            <div className="about-content">
                                <p>
                                    I am a Full-Stack Developer based in Toronto, ON.
                                </p>
                                <p>
                                    I enjoy creating all sorts of software that can be accessed through the internet, whether that be
                                    websites, applications or anything in between. My goal is to always uniquely expresses a product,
                                    as well as providing snappy and smooth perfomance.
                                </p>
                                <p>
                                    Here are a few technologies that I have been working with recently:
                                </p>
                                <div className="recent-techs">
                                    <ul>
                                        <li> React </li>
                                        <li> Vue </li>
                                        <li> Go </li>
                                        <li> Python </li>
                                        <li> Django </li>
                                    </ul>
                                    <ul>
                                        <li> Node </li>
                                        <li> Kubernetes </li>
                                        <li> Docker </li>
                                        <li> MongoDB </li>
                                        <li> GraphQL </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-picture">
                                <img src={me} alt="me"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;