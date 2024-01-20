import { useState } from 'react';

let nextId = 0;

export default function MyTodoPractise() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  
   const handleClick=()=>{
    setArtists([
        ...artists,
        { id: nextId++, name: name }
    
      ]);
   }
   const handleDelete = (id)=>{
    console.log('dfddfwws',id);
  
    setArtists(artists.filter(artist => artist.id !== id));
   }
    const handleAlldelete=(id)=>{
        setArtists(artists.slice(...artists,id));
    }
   console.log('dsdffdd',artists)
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={ handleClick}>Add</button>
      <ul>
        {artists.map(artist => (
        <>
        <button onClick={(id)=>handleAlldelete(artist.id)}>delete all</button>
          <li key={artist.id}>{artist.name}</li>
          <button onClick={(id)=> handleDelete(artist.id)}>Delete</button>
          </>
        ))}
      </ul>
    </>
  );
}
