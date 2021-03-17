import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css'
import { Element } from 'react-scroll';
import Home from './components/Home';

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
        <Home/>
        {/* <Element id="home" name="home">
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
        </Element> */}
      </>
    )
  }
}

function timeout() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;