import React, { useState, useContext } from 'react';
import { ADD_MESSAGE } from '../actions';
import AppContext from '../contexts/AppContext';
import { Button, Box, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

// FIXME: 改行できない

const MessageForm = () => {
  const [content, setContent] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleMessageSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_MESSAGE,
      content
    });
    setContent('');
  }

  const unSubmit = content === '';

  return (
    <Box display='flex' className='fixed-bottom'>
      <TextField
        label='コメント'
        variant='outlined'
        fullWidth
        style={{ marginRight: 1 }}
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