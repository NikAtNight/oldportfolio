import React from 'react';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    timeout().then(() => this.setState({ loading: false }))
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }

    return (
      <>
        <Navigation />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </>
    )
  }
}

function timeout() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;