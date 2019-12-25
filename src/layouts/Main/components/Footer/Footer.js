import React, { useContext, useState, useEffect } from 'react';
import { DELETE_CURRENT_USER_INFO } from '../../../../actions';
import { AppContext } from '../../../../contexts';
import { firebaseApp } from '../../../../firebase';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';

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

  useEffect(() => {
    const pathName = window.location.pathname.slice(1);
    setValue(pathName)
  }, [])

  // FIXME: 初回リダイレクト時にナビゲーションがアクティブではない。

  return (
    <Box style={ { position: 'fixed', bottom: '0px', left: '0px', width: '100%' } }>
      <BottomNavigation
        value={ value }
        onChange={ (_event, newValue) => { setValue(newValue) } }
        showLabels
      >
        <BottomNavigationAction
          component={ Link }
          icon={ <PeopleIcon /> }
          label='users'
          to='/users'
          value='users'
        />
        <BottomNavigationAction
          component={ Link }
          icon={ <ChatIcon /> }
          label='chatRoom'
          to='/chatRoom'
          value='chatRoom'
        />
        <BottomNavigationAction
          icon={ <ChatIcon /> }
          label='logout'
          onClick={ logoutUser }
        />
      </BottomNavigation>
    </Box>
  )
}

export default Footer;
