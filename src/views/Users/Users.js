import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const Users = () => {
  return (
    <>
      <Table aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell>登録されたユーザー(Googleアカウントのみ)をここに表示予定</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Users;
