import React from 'react';
import Landing from './Components/Landing';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import './App.css'
import { Element } from 'react-scroll';

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
        <div className="container">
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