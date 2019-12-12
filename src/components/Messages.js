import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

// FIXME: 文字は右寄せしたい

const Messages = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      { state.messages.map((message, index) => (
        message.current_user ? <div className='current-message-wrap' key={ index }>
                                  <div className='message current-message'>
                                    <p>{ message.content }</p>
                                  </div>
                                </div> :
                                <div className='message other-message' key={ index }>
                                  <p>{ message.content }</p>
                                </div>))
      }
    </>
  )
};

export default Messages;