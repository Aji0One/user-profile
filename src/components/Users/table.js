

import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import axios from "axios";

function Tables({ change, changes, formData, setFormData }) {


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [user, setUser] = useState([]);
  useEffect(() => {
    async function crud() {
      const getData = await axios.get("https://632138b082f8687273ae2989.mockapi.io/guvi/crud/user")
      setUser(getData.data);

    }
    crud();
  }, [])

  const onPopulateData = (id) => {
    const selectedData = user.filter((row) => row.id === id)[0];
    setFormData({ ...formData, ...selectedData })
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/user/${id}`)
    const userData = user.filter((key) => key.id !== response.data.id)
    setUser(userData);
  }

  // const handleState = (id) => {
  //   onPopulateData(id);
  //   setState(!state);

  // } 
  return (

    <>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                {/* <TableCell align="right">Age</TableCell> */}
                <TableCell align="right">Email</TableCell>
                {/* <TableCell align="right">Gender</TableCell> */}
                <TableCell align="right">Courses</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}

                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  {/* <TableCell align="right">{row.age}</TableCell> */}
                  <TableCell align="right">{row.email}</TableCell>
                  {/* <TableCell align="right">{row.gender}</TableCell> */}
                  <TableCell align="right">{row.courses}</TableCell>
                  <TableCell align="right">
                    <Button variant="text" onClick={() => { changes(!change); onPopulateData(row.id) }} >Edit</Button>
                    <Button variant="text" onClick={() => handleDelete(row.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10]}
          component="div"
          count={user.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )

}

export default Tables;