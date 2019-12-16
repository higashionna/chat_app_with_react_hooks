// import React, { useContext } from 'react';
// import AppContext from '../contexts/AppContext';
// import { BottomNavigationAction } from '@material-ui/core';
// import { DELETE_CURRENT_USER_INFO } from '../actions';
// import { firebaseApp } from '../firebase/index';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// const Logout = () => {
//   const { dispatch } = useContext(AppContext);

//   const logoutUser = e => {
//     e.preventDefault();
//     firebaseApp.auth().signOut().then(() => {
//       dispatch({
//         type: DELETE_CURRENT_USER_INFO
//       })
//       alert("ログアウトしました");
//     })
//     .catch((error) => {
//       alert(`ログアウト時にエラーが発生しました (${ error })`);
//     });
//   }

//   return (
//     <BottomNavigationAction
//       label='logout' icon={ <ExitToAppIcon /> }
//       onClick={ logoutUser }
//     />
//   )
// }

// export default Logout;