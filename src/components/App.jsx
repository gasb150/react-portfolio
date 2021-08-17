import React from 'react';
import './fontAwesome';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import Hello from '../containers/Hello';
import Projects from '../containers/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dowmloadUrl = 'https://dl.dropboxusercontent.com/s/nv0d0d4c67vb34b/Resume%20Gustavo%20Sanmartin.pdf?dl=0';
  return (
    <>

      <Header />
      <div className="container">
        <Hello />
        <Projects />
        <About dowmloadUrl={dowmloadUrl} />

      </div>
      <Contact />
      <Footer dowmloadUrl={dowmloadUrl} />
    </>
  );
};

export default App;
