import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Work from '../Work/Work';
import './home.css'

class Home extends React.Component {
    state = {
        home: "Home",
        about: "About",
        work: "Work",
        contact: "Contact"
    }

    handleClick = (event) => {
        document.getElementsByClassName('open-column')[0].childNodes[0].className = "closed-button-container";
        document.getElementsByClassName('open-column')[0].childNodes[1].className = "closed-content";
        document.getElementsByClassName('open-column')[0].className = 'closed-column';
        let val = event.target.value;
        switch (val) {
            case "Home":
                document.getElementById('home').className = 'open-column';
                document.getElementById('home').childNodes[0].className = "open-button-container";
                document.getElementById('home').childNodes[1].className = "open-content";
                break;
            case "About":
                document.getElementById('about').className = 'open-column';
                document.getElementById('about').childNodes[0].className = "open-button-container";
                document.getElementById('about').childNodes[1].className = "open-content";
                break;
            case "Work":
                document.getElementById('work').className = 'open-column';
                document.getElementById('work').childNodes[0].className = "open-button-container";
                document.getElementById('work').childNodes[1].className = "open-content";
                break;
            case "Contact":
                document.getElementById('contact').className = 'open-column';
                document.getElementById('contact').childNodes[0].className = "open-button-container";
                document.getElementById('contact').childNodes[1].className = "open-content";
                break;
        }
    }

    render() {
        return (
            <section className="home-container">
                <div className="row">
                    <div id="home" className="open-column">
                        <div className="open-button-container">
                            <button onClick={this.handleClick} value={this.state.home} className="home-button"> {this.state.home} </button>
                        </div>
                        <div className="open-content">
                            <Landing />
                        </div>
                    </div>
                    <div id="about" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.about} className="about-button"> {this.state.about} </button>
                        </div>
                        <div className="closed-content">
                            <About />
                        </div>
                    </div>
                    <div id="work" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.work} className="work-button"> {this.state.work} </button>
                        </div>
                        <div className="closed-content">
                            <Work />
                        </div>
                    </div>
                    <div id="contact" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.contact} className="contact-button"> {this.state.contact} </button>
                        </div>
                        <div className="closed-content">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;