import React, { useReducer, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import Footer from '../pages/Footer';
import { firebaseDb } from '../firebase';
import Header from '../pages/Header';
import reducer from '../reducers';
import Login from './Login';
import { SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE } from '../actions';
import { SET_MESSAGES } from '../actions';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/common.scss';

function App() {
  const initialState = {
    currentUserInfos: '',
    chatRooms: [],
    messages: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // TODO: ここの警告を消したい。
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
      { state.currentUserInfos ? (
                                  <>
                                    <Footer />
                                  </>
                                  ) : (
                                  <Login />)
      }
    </AppContext.Provider>
  );
}

export default App;
