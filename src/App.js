import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Tab from './components/TabView/Tab';
import Test from './components/testing/Test';
function App() {
  return (
    <div className="app">
      {/* <Test /> */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonial />
      <Footer /> */}
    </div>
  );
}

export default App;
