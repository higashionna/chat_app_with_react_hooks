import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Messages } from './components';
import { MessageForm } from './components';

const ChatRoom = () => {
  return (
    <>
      <Container style={ { paddingBottom: '128px' } }>
        <Messages/>
      </Container>
      <Box style={ { position: 'fixed', bottom: '56px', left: '0', width: '100%'} }>
        <MessageForm />
      </Box>
    </>
  )
}

export default ChatRoom;
