import React, { useState, useContext } from 'react';
import { ADD_MESSAGE } from '../../../../actions';
import { AppContext } from '../../../../contexts';
import { Button, Box, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageForm = () => {
  const [content, setContent] = useState('');
  const { state, dispatch } = useContext(AppContext);

  const handleMessageSubmit = e => {
    e.preventDefault();
    const uid = state.currentUserInfos.uid
    const image = state.currentUserInfos.image
    dispatch({
      type: ADD_MESSAGE,
      uid,
      content,
      image
    });
    setContent('');
  }

  const unSubmit = content === '';

  return (
    <Box container='true' display='flex' style={ { marginTop: '8px' } }>
      <TextField
        label='メッセージ'
        variant='outlined'
        fullWidth
        multiline
        style={{ backgroundColor: '#FFF' }}
        value={ content }
        onChange={ e => setContent(e.target.value) }
      />
      <Button
        variant="contained"
        color="primary"
        disabled={ unSubmit }
        onClick={ handleMessageSubmit }
      >
        <SendIcon />
      </Button>
    </Box>
  )
}

export default MessageForm;
