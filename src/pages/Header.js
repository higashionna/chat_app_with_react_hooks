import React from 'react';
import { AppBar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar
      position='static'
      style={ { height: '30px' } }
    >
      <div>ここに相手の名前を書きたい</div>
    </AppBar>
  )
}

export default Header;