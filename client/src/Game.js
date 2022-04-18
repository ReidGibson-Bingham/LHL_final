import React, {Fragment, useState} from "react";
import axios from "axios";

export default function Game() {

  const [data, setData] = useState('');
  
  const getGameData = function(e) {
    e.preventDefault()
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
  
  const modifiedData = Object.entries({...data[0]});

  const dataItems = modifiedData.map( (item) => {

    return (
      <div>
        {item[0]}: {item[1]}
      </div>
    )

  })


  return (
    <Fragment>
      <button className='start-button' onClick={getGameData}> Start Game </button>
      <ul>
        {dataItems}
      </ul>
    </Fragment>
  );
  
}