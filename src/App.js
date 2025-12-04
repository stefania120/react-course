import React, { useState, useEffect } from "react";
import "./App.css";

const char = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }

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
    console.log('char', this.props.character);
  }

  render() {
    const { name, image, species, status } = this.props.character;
    return (
      <div className="card">
        <img src={image} alt="img" onClick={this.handleClick} />
        <h2>{name}</h2>
        <p>{species} - {status}</p>
      </div>
    );
  }
}


const App = () => {
  return (
    <section className="card-section">
      <Card character={char} key={char.id} />
    </section>
  );
};


export default App;
