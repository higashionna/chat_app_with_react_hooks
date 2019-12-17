import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import { Avatar, Grid } from '@material-ui/core';

const $ = require('jquery')

const Messages = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const height = { ...$('.message').last().offset() } // オブジェクトにしないとtopが取れない。
    $(window).scrollTop(height.top);
  })

  return (
    <>
      { state.messages.map((message, index) => (
        message.uid === state.currentUserInfos.uid ? <Grid container direction="column" alignItems="flex-end" style={ { marginTop: '8px' } } key={ index }>
                                                       <Grid item>{ message.createdAt }</Grid>
                                                       <Grid container alignItems="flex-end" style={ { justifyContent: 'flex-end', marginTop: '4px' } }>
                                                         <Grid item style={ { marginRight: '16px' } } className='message current-message'>
                                                           <pre>{ message.content }</pre>
                                                         </Grid>
                                                         <Grid item>
                                                           <Avatar src={ message.userImage } />
                                                         </Grid>
                                                       </Grid>
                                                     </Grid> :
                                                     <Grid container direction='column' style={ { marginTop: '8px' } } key={ index }>
                                                       <Grid item>{ message.createdAt }</Grid>
                                                       <Grid container>
                                                         <Grid item><Avatar src={ message.userImage } /></Grid>
                                                         <Grid item style={ { marginLeft: '16px' } } className='message other-message' key={ index }>
                                                           <pre>{ message.content }</pre>
                                                         </Grid>
                                                       </Grid>
                                                     </Grid>
                                                     ))
      }
    </>
  )
};

export default Messages;