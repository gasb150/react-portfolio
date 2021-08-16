
import React from 'react'
import './fontAwesome'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'
import Header from '../containers/Header'
import Hello from '../containers/Hello'
import Projects from '../containers/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>

  <Header />
  <Hello />
  <Projects />
  <About />
  <Contact />
  <Footer />

  </>
)

export default App