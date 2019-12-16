import React from 'react';
import { Box, Container } from '@material-ui/core';
import Header from '../pages/Header';
import Messages from './Messages';
import MessageForm from './MessageForm';

const Room = () => {
  return (
    <>
      <Header />
      <Container style={ { paddingBottom: '128px' } }>
        <Messages/>
      </Container>
      <Box style={ { position: 'fixed', bottom: '56px', left: '0', width: '100%'} }>
        <MessageForm />
      </Box>
    </>
  )
}

export default Room;
