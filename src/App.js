import './App.css';
import { useState, useEffect } from "react";
import champions from "lol-champions"
import Cards from "./Cards.js";
import Display from "./display.js";

function App() {
  console.log(champions)
  const [championList, setChampionList] = useState(champions)
  const [champHighlight, setChampHighlight] = useState(champions[0])
  const [champRole, setChampRole] = useState('all')
  const [champName, setChampName] = useState('')

  const filterByName = (e) => {
    setChampName(e.target.value.toLowerCase());
  }

  const updateChampList = () => {
    if (champRole === 'all') {
      setChampionList(champions.filter(champ => {
        return (champ.name.toLowerCase().includes(champName.toLowerCase()))
      }))
    } else {
      setChampionList(champions.filter(champ => {
        return (champ.name.toLowerCase().includes(champName.toLowerCase()) && champ.tags.includes(champRole))
      }))
    }
  }

  useEffect(updateChampList, [champRole, champName]);


  const champCards = championList.map((champInfo) => {
    return <Cards championInfo={champInfo} setChampHighlight={setChampHighlight} />
  })


  return (
    <div className="mainContainer">
      <Display currChamp={champHighlight} />
      <div className='filterContainer'>
        <input
          type="text"
          onChange={filterByName}
        ></input>
        <div className='buttonContainer'>
          <button
            onClick={() => {
              setChampRole('all')
            }}
          >All</button>
          <button
            onClick={() => {
              setChampRole('Fighter')
            }}
          >Fighter</button>
          <button
            onClick={() => {
              setChampRole('Tank')
            }}
          >Tank</button>
          <button
            onClick={() => {
              setChampRole('Mage')
            }}
          >Mage</button>
          <button
            onClick={() => {
              setChampRole('Assassin')
            }}
          >Assassin</button>
          <button
            onClick={() => {
              setChampRole('Support')
            }}
          >Support</button>
          <button
            onClick={() => {
              setChampRole('Marksman')
            }}
          >Marksman</button>
        </div>
      </div>
      <div className="champContainer">
        {champCards}
      </div>
    </div >
  )
}



export default App;
