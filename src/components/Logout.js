import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Button, Grid } from '@material-ui/core';
import { DELETE_CURRENT_USER_INFO } from '../actions';
import { firebaseApp } from '../firebase/index';

const Logout = () => {
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
    <Grid
      container
      direction="row"
      justify="flex-end"
      style={ { padding: '8px' } }
    >
      <Button
        variant='contained'
        color='secondary'
        onClick={ logoutUser }
      >
        ログアウト
      </Button>
    </Grid>
  )
}

export default Logout;