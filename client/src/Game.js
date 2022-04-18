import React, {useState} from "react";
import axios from "axios";

export default function Game() {

  const [data, setData] = useState('');
  
  const getGameData = function() {
    axios.get('http://localhost:3000/games')
      .then((response) => {
        console.log("response:", response.data)
        setData(response.data )
        console.log("data:", data)
      })
      .catch(() => {
        alert("Error retreiving data")
      })
  }

  console.log("##data:", data);

  const displayGameData = function(data) {
    
    console.log("@@data:", data[0]);

    if (!data) {
      return null;
    } 
    else {
      return (
        <div>{data[0].id}</div>
      )
    }

  }

  return (
    <>

      <button className='start-button' onClick={getGameData}> Start Game </button>

      <div>{displayGameData(data)}</div>

    </>
  );
  
}