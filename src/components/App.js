import React, { useReducer } from 'react';
import AppContext from '../contexts/AppContext';
import { Container } from '@material-ui/core';
import reducer from '../reducers';
import MessageForm from '../components/MessageForm';
import Messages from '../components/Messages';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/common.scss';

function App() {
  const initialState = []

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <Container>
        <Messages />
        <MessageForm />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
