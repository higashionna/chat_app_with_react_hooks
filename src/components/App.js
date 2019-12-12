import React, { useReducer, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import { Container } from '@material-ui/core';
import reducer from '../reducers';
import Login from './Login';
import Logout from './Logout';
import MessageForm from '../components/MessageForm';
import Messages from '../components/Messages';
import { SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE } from '../actions';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/common.scss';

function App() {
  const initialState = {
    currentUserInfos: '',
    messages: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE
    })
  }, [])

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { state.currentUserInfos ? (<>
                                    <Logout />
                                    <Container>
                                      <Messages />
                                      <MessageForm />
                                    </Container>
                                  </>
                                  ) : (
                                  <Login />)
      }
    </AppContext.Provider>
  );
}

export default App;
