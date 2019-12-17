import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { DELETE_CURRENT_USER_INFO } from '../actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { firebaseApp } from '../firebase/index';
import ChatRoom from './ChatRoom';
// import PeopleIcon from '@material-ui/icons/People';
// import Users from './Users'

const Footer = () => {
  const [value, setValue] = useState()

  const { dispatch } = useContext(AppContext);

  const logoutUser = e => {
    e.preventDefault();
    firebaseApp.auth().signOut().then(() => {
      dispatch({
        type: DELETE_CURRENT_USER_INFO
      })
      alert("ログアウトしました");
    })
    .catch((error) => {
      alert(`ログアウト時にエラーが発生しました (${ error })`);
    });
  }

  return (
    <BrowserRouter>
      {/* <Route path='/users' component={ Users } /> */}
      <Route path='/chatRooms' component={ ChatRoom } />

      <Box style={ { position: 'fixed', bottom: '0px', left: '0px', width: '100%' } }>
        <BottomNavigation
          value={ value }
          onChange={ (_event, newValue) => { setValue(newValue) } }
          showLabels
        >
          {/* <BottomNavigationAction
            component={ Link }
            icon={ <PeopleIcon /> }
            label='users'
            to='/users'
            value='users'
          /> */}
          <BottomNavigationAction
            component={ Link }
            icon={ <ChatIcon /> }
            label='chatRooms'
            to='/chatRooms'
            value='chatRooms'
          />
          <BottomNavigationAction
            component={ Link }
            icon={ <ExitToAppIcon /> }
            label='logout'
            to='/logout'
            onClick={ logoutUser }
            value='logout'
          />
        </BottomNavigation>
      </Box>
    </BrowserRouter>
  )
}

export default Footer;
