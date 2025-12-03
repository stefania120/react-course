import React, {useState, useEffect} from 'react'
import './App.css'


const Image = (props) => {
  return <img  src={props.src} alt={props.title} />
}

const Card = ({character}) => {
  const {name, image, species, status} = character;
  return (
    <div className='card'>
      <Image  src={image} alt={name}/>
      <h2>{name}</h2>
      <p>{species} - {status}</p>
    </div>
  )
}


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then( res => res.json())
      .then(body => {
        setData(body.results);
      })
  }, [])
  return (
    <section className='card-section'>
      {data.map( el => (
        <Card character={el}></Card>
      ))}
    </section>
  )
}

export default App
