import './App.css';
import { useState } from "react";
import champions from "lol-champions"
import Cards from "./Cards.js";
import Display from "./display.js";

function App() {
  console.log(champions)
  const [championList, setChampionList] = useState(champions)
  const [champHighlight, setChampHighlight] = useState(champions[0])
  const [champRole, setChampRole] = useState('all')
  const [champName, setChampName] = useState('')

  // const filterByName = (e) => {
  //   setChampionList(champions.filter(champ => {
  //     return champ.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   }))
  // }

  const filterByName = (e) => {
    setChampName(e.target.value.toLowerCase());
    updateChampList();
  }

  const filterByRole = (e) => {
    setChampionList(champions.filter((champ) => {
      return champ.tags.includes(champRole);
    }))
  }

  const updateChampList = () => {
    setChampionList(champions.filter(champ => {
      return champ.name.toLowerCase().includes(champName)
    }))
  }

  console.log(champName)


  const champCards = championList.map((champInfo) => {
    return <Cards championInfo={champInfo} setChampHighlight={setChampHighlight} />
  })

  console.log(champRole)

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
            onClick={(e) => {
              setChampionList(champions)
            }}
          >All</button>
          <button
            onClick={(e) => {
              setChampRole('fighter')
              filterByRole();
            }}
          >Fighter</button>
          <button
            onClick={() => {
              setChampionList(champions.filter(champ => {
                return champ.tags.includes('Tank')
              }))
            }}
          >Tank</button>
          <button
            onClick={() => {
              setChampionList(champions.filter(champ => {
                return champ.tags.includes('Mage')
              }))
            }}
          >Mage</button>
          <button
            onClick={() => {
              setChampionList(champions.filter(champ => {
                return champ.tags.includes('Assassin')
              }))
            }}
          >Assassin</button>
          <button
            onClick={() => {
              setChampionList(champions.filter(champ => {
                return champ.tags.includes('Support')
              }))
            }}
          >Support</button>
          <button
            onClick={() => {
              setChampionList(champions.filter(champ => {
                return champ.tags.includes('Marksman')
              }))
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
