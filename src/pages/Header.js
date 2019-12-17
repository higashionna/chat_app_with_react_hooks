import React from 'react';
import { AppBar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar
      position='static'
      style={ { height: '60px' } }
    />
  )
}

export default Header;