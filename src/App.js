import React from 'react';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import './App.css'
import { Element } from 'react-scroll';
import Home from './components/Home/Home';

class App extends React.Component {
  state = {
    loading: true
  }

  // componentDidMount() {
  //   timeout().then(() => this.setState({ loading: false }))
  // }

  render() {
    // const { loading } = this.state;

    // if (loading) {
    //   return null;
    // }

    return (
      <>
        <Navigation />
        <div className="big-device">
          <Home />
        </div>
        <div className="small-device">
          <Element id="home" name="home">
            <Landing />
          </Element>
          <Element id="about" name="about">
            <About />
          </Element>
          <Element id="work" name="work">
            <Work />
          </Element>
          <Element id="contact" name="contact">
            <Contact />
          </Element>
        </div>

      </>
    )
  }
}

function timeout() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;