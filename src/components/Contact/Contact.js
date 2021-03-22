import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <section className="container">
            <div className="page-container">
                <div className="content-container">
                    <div className="background-font animate__animated animate__fadeIn">
                        <h1 className="contact"> contact </h1>
                    </div>
                    <div className="contact-container animate__animated animate__fadeIn">
                        <div>
                            <h1> Get In Touch </h1>
                            <p>
                                I am currently looking for any new opportunities,
                                my inbox is always open.
                                Whether you have a question or just want to say hi,
                                I'll try my best to get back to you!
                        </p>
                            <button onClick={(e) => {
                                window.location = "mailto:nikhil.kapadia.97@gmail.com";
                                e.preventDefault();
                            }}>
                                Say Hello
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;