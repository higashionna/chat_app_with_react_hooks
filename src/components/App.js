import React, { useReducer, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import MainContent from './MainContent';
import { firebaseDb } from '../firebase';
import reducer from '../reducers';
import Login from './Login';
import { SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE } from '../actions';
import { SET_MESSAGES } from '../actions';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/common.scss';

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
    dispatch({
      type: SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE
    })
  }, []);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { state.currentUserInfos ? (<MainContent />) : (<Login />) }
    </AppContext.Provider>
  );
}

export default App;
