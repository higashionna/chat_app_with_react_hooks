import React from 'react';
import { Footer, Header } from './components';

const Main = props => {
  const { children } = props;

  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
  )
}

export default Main;
