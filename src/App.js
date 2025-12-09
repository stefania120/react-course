import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
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
      gender: ""
    };
  }

  handleChange = (e) => {
    console.log("event", e);
    const { value, name, checked, target } = e.target;
    // this.setState({ username: e.target.value });
    if (e.target.type === "checkbox") {
      this.setState((prevSteate) => {
        return { ...prevSteate, [name]: checked };
      });
    } else {
      this.setState((prevSteate) => {
        return { ...prevSteate, [name]: value };
      });
    }
  };
  render() {
    return (
      // <section className="card-section">
      //   <Card character={char} key={char.id} />
      // </section>
      <>
        <h2>{this.state.username}</h2>
        <form style={{ display: "flex", flexDirection: "column"}}>
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
          <input type="radio" name="gender" value="male" onChange={this.handleChange}></input>
          <label>Female</label>
          <input type="radio" name="gender" value="female" onChange={this.handleChange}></input>
          <label>Other</label>
          <input type="radio" name="gender" value="other" onChange={this.handleChange}></input>
        </form>
      </>
    );
  }
}

export default App;
