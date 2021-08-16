import React, { Fragment } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

 const App = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Main />
      <Footer/>
    </Fragment>
  );
}

export default App;
