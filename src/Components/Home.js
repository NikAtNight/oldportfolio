import React from 'react';
import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Work from './Work';

class Home extends React.Component {
    state = {
        home: "0. Home",
        about: "1. About",
        work: "2. Work",
        contact: "3. Contact"
    }

    handleClick = (event) => {
        document.getElementsByClassName('open-column')[0].childNodes[0].className = "closed-button-container";
        document.getElementsByClassName('open-column')[0].childNodes[1].className = "closed-content";
        document.getElementsByClassName('open-column')[0].className = 'closed-column';
        let val = event.target.value;
        switch (val) {
            case "0. Home":
                document.getElementById('home').className = 'open-column';
                document.getElementById('home').childNodes[0].className = "open-button-container";
                document.getElementById('home').childNodes[1].className = "open-content";
                break;
            case "1. About":
                document.getElementById('about').className = 'open-column';
                document.getElementById('about').childNodes[0].className = "open-button-container";
                document.getElementById('about').childNodes[1].className = "open-content";
                break;
            case "2. Work":
                document.getElementById('work').className = 'open-column';
                document.getElementById('work').childNodes[0].className = "open-button-container";
                document.getElementById('work').childNodes[1].className = "open-content";
                break;
            case "3. Contact":
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
                            <button onClick={this.handleClick} value={this.state.home}> {this.state.home} </button>
                        </div>
                        <div className="open-content">
                            <Landing />
                        </div>
                    </div>
                    <div id="about" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.about}> {this.state.about} </button>
                        </div>
                        <div className="closed-content">
                            <About />
                        </div>
                    </div>
                    <div id="work" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.work}> {this.state.work} </button>
                        </div>
                        <div className="closed-content">
                            <Work />
                        </div>
                    </div>
                    <div id="contact" className="closed-column">
                        <div className="closed-button-container">
                            <button onClick={this.handleClick} value={this.state.contact}> {this.state.contact} </button>
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