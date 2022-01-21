import React, {useState} from 'react';

function App() {
// Style
const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection : 'column'
};
const heading = {
  textDecoration: 'underline',
}

const [rhyme, setRhyme] = useState([]);

// fetch the rhyme word 
  const fetchDatamuse = e => {
    const query = e.target.value
    fetch(`https://api.datamuse.com/words?ml=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRhyme(data)
      })
  }

  return (
    <div style={container}>
      <h1 style={heading}>Rhymeasurus Word</h1>
      <input onChange={fetchDatamuse} placeholder="Search Rhyme" />
      {rhyme.length > 0 && (
        <ul>
          {rhyme.map((rhy,i) => (
            <li key={i}>{rhy.word}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App;
