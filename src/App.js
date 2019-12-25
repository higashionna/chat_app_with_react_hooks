import React, { useReducer, useEffect } from 'react';
import { AppContext } from './contexts';
import { firebaseDb, firebaseApp } from './firebase';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './views';
import { ADD_CURRENT_USER_INFO } from './actions';
import { SET_MESSAGES } from './actions';
import Routes from './Routes';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/common.scss';

function App() {
  const initialState = {
    currentUserInfos: '',
    chatRooms: [],
    messages: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    firebaseDb.ref('messages/').on('child_added', (snapshot) => {
      const messages = snapshot.val()
      dispatch({
        type: SET_MESSAGES,
        messages
      })
    });
  }, [])

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid
        const name = `ゲストユーザー${ uid }`
        const image = user.photoURL

        dispatch({
          type: ADD_CURRENT_USER_INFO,
          uid,
          name,
          image
        })
      }
    });
  }, []);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <BrowserRouter>
        { state.currentUserInfos ? (<Routes />) : (<Login />) }
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
