import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const Rooms = () => {
  return (
    <>
      <Table aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell>user name</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Rooms;
