import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import { Button, Card, CardActions, CardContent, Grid } from '@material-ui/core';
import firebase from 'firebase';
import { firebaseApp } from '../../firebase';
import { ADD_CURRENT_USER_INFO } from '../../actions';

// BUG: ボタンが二度押しできてしまう。

const Login = () => {
  const { dispatch } = useContext(AppContext);

  const loginAsAnonymousUser = e => {
    e.preventDefault();
    firebaseApp.auth().signInAnonymously().catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`エラーが発生しました。エラーコード${ errorCode }:${ errorMessage }`)
    });

    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid;
        const name = `ゲストユーザー${ uid }`
        dispatch({
          type: ADD_CURRENT_USER_INFO,
          uid,
          name
        });
        alert(`${ name }としてログインしました。`)
      }
    });
  }

  const loginAsGoogleAccount = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      const user = result.user;
      const uid = user.uid
      const name = user.displayName;
      const image = user.photoURL
      dispatch({
        type: ADD_CURRENT_USER_INFO,
        uid,
        name,
        image
      })
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`エラーが発生しました。エラーコード${ errorCode }:${ errorMessage }`)
    });
  }

  return (
    <Grid
      container
      justify='center'
      style={ { position: 'fixed', top: '35%' } }
    >
      <Card style={ { width: '300px' } }>
        <CardContent>
          <h3>ログインして利用する</h3>
        </CardContent>
        <CardActions style={ { display: 'flex', flexDirection: 'column' } }>
          <Button
            className='loginBtn'
            variant='contained'
            color='primary'
            onClick={ loginAsAnonymousUser }
            style={ { marginBottom: '8px' } }
          >
            匿名ログイン
          </Button>
          <img
            className='loginBtn'
            alt='GoogleLoginImage'
            style={ { cursor: 'pointer' } }
            src={ `${process.env.PUBLIC_URL}/images/btn_google_signin.png` }
            onClick={ loginAsGoogleAccount }
          />
        </CardActions>
      </Card>
    </Grid>
  )
};

export default Login;