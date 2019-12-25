import React, { useReducer, useEffect } from 'react';
import { AppContext } from './contexts';
import { firebaseDb } from './firebase';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './views';
import { SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE } from './actions';
import { SET_MESSAGES } from './actions';
import Routes from './Routes';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/common.scss';

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
      <BrowserRouter>
        { state.currentUserInfos ? (<Routes />) : (<Login />) }
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
