import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const char = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

// const Card =  (props) => {
//     const { name, image, species, status } = props.character;
//   const handleClick = () => {
//     console.log('char', props.character);
//   }
//   return (
//     <div className="card">
//       <img src={image} alt="img" onClick={handleClick} />
//       <h2>{name}</h2>
//       <p>
//         {species} - {status}
//       </p>
//     </div>
//   );
// };

//

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("char", this.props.character);
  };

  render() {
    const { name, image, species, status } = this.props.character;
    return (
      <div className="card">
        <img src={image} alt="img" onClick={this.handleClick} />
        <h2>{name}</h2>
        <p>
          {species} - {status}
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
      surname: "",
      subscribed: false,
      gender: "",
      age: "",
    };
  }

    isFormValid = () => {
    const { username, name, surname, gender, age } = this.state;

    const allFilled =
      username.trim() !== "" &&
      name.trim() !== "" &&
      surname.trim() !== "" &&
      gender !== "" &&
      age !== "";

    return allFilled;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isFormValid()) return;

    const result = {
      username: this.state.username,
      name: this.state.name,
      surname: this.state.surname,
      subscribed: this.state.subscribed,
      gender: this.state.gender,
      age: this.state.age,
    };

    console.log(result);
  };


  handleChange = (e) => {
    console.log("event", e);
    const { value, name, checked, target, type } = e.target;
    // this.setState({ username: e.target.value });
    // const test = condizione ? valoreSeVero : valoreSeFalso
      this.setState(prevSteate => {
        return { ...prevSteate, [name]: type === 'checkbox' ? checked : value
        };
      });
  };
  render() {
    return (
      // <section className="card-section">
      //   <Card character={char} key={char.id} />
      // </section>
      <>
        <h2>{this.state.username}</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            value={this.state.username}
            onChange={this.handleChange}
            label="username"
            variant="outlined"
            name="username"
          />
          <TextField
            value={this.state.name}
            onChange={this.handleChange}
            label="name"
            variant="outlined"
            name="name"
          />
          <TextField
            value={this.state.surname}
            onChange={this.handleChange}
            label="surname"
            variant="outlined"
            name="surname"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.subscribed}
                onChange={this.handleChange}
                name="subscribed"
                color="primary"
              />
            }
            label="Subscribed"
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          ></input>
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          ></input>
          <label>Other</label>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={this.handleChange}
          ></input>
          <FormControl>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={this.state.age}
              onChange={this.handleChange}
              name="age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!this.isFormValid()}
          >
            Invia
          </Button>
        </form>
      </>
    );
  }
}

export default App;
