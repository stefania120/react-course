import React, { useState, useEffect, use } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";
import {
  Button,
  TextField,
  Grid,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Table
} from "@mui/material";

const App = () => {

  const [users, setUsers] = useState([]);

  const deleteUser = user => {
    const newUsers = users.filter(el => el.email !== user.email);
    setUsers(newUsers);
  }

  const handleSubmit = (user) => {
    if(users.find(el => el.email === user.email)) {
      return alert("Utente già iscritto");;
    }
    setUsers( [...users, user]);
  }

  return (
    <>
      <Form handleSubmit= {handleSubmit}/>
      <hr></hr>
      <UsersTable users={users} deleteUser={deleteUser}/>
    </>
  );
};

const INITIAL_FORM_STATE = {
  fullname: "",
  email: "",
  password: "",
  city: "",
  province: "",
  street: "",
  streetNumber: "",
  postalCode: "",
};

const Form = ({handleSubmit}) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    city: "",
    province: "",
    street: "",
    streetNumber: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckSubmit = () => {
    const { fullname, email, password, city, province, street, streetNumber, postalCode } = formData;
    return !fullname || !email || !password || !city || !province || !street || !streetNumber || !postalCode;
  }

  const onSubmit = () => {
    handleSubmit(formData);
    setFormData(INITIAL_FORM_STATE);
  };
  return (
    <Grid container spacing={3} justifyContent="flex-start" alignItems="center">
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="fullname"
          onChange={handleChange}
          value={formData.fullname}
          variant="outlined"
          label="Fullname"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="email"
          onChange={handleChange}
          value={formData.email}
          variant="outlined"
          label="Email"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="password"
          onChange={handleChange}
          value={formData.password}
          variant="outlined"
          label="Password"
          type="password"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="city"
          onChange={handleChange}
          value={formData.city}
          variant="outlined"
          label="City"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="province"
          onChange={handleChange}
          value={formData.province}
          variant="outlined"
          label="Province"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="postalCode"
          onChange={handleChange}
          value={formData.postalCode}
          variant="outlined"
          label="PostalCode"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="street"
          onChange={handleChange}
          value={formData.street}
          variant="outlined"
          label="Street"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TextField
          fullWidth
          name="streetNumber"
          onChange={handleChange}
          value={formData.streetNumber}
          variant="outlined"
          label="StreetNumber"
        />
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" disabled={handleCheckSubmit()} variant="contained" onClick={() => handleSubmit(formData)}>
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );
};

const UsersTable = ({deleteUser, users}) => {
  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell >Address</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            !users?.length && (
              <TableRow>
                <TableCell colSpan={4} align="center">Nessun utente iscritto</TableCell>
              </TableRow>
            )
          }
          {users?.map((user, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.fullname}
              </TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell align="right">{`${user.street} ${user.streetNumber} ${user.city} (${user.province}) - ${user.postalCode}`}
              </TableCell>
              <TableCell align="center">
                <DeleteIcon onClick={() => deleteUser(user)} style={{cursor: 'pointer'}} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default App;
