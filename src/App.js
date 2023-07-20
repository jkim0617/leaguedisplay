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
          ><img
            src="https://universe.leagueoflegends.com/images/role_icon_fighter.png"
          >
            </img></button>
          <button
            onClick={() => {
              setChampRole('Tank')
            }}
          ><img
            src='https://www.mobafire.com/images/wiki/roles/tank.png'
          >
            </img>
          </button>
          <button
            onClick={() => {
              setChampRole('Mage')
            }}
          >
            <img
              src='https://www.mobafire.com/images/wiki/roles/mage.png'
            >
            </img>
          </button>
          <button
            onClick={() => {
              setChampRole('Assassin')
            }}
          >
            <img
              src="https://www.mobafire.com/images/wiki/roles/assassin.png">
            </img>
          </button>
          <button
            onClick={() => {
              setChampRole('Support')
            }}
          >
            <img
              src='https://www.mobafire.com/images/wiki/roles/support.png'
            >
            </img>
          </button>
          <button
            onClick={() => {
              setChampRole('Marksman')
            }}
          >
            <img
              src="https://www.mobafire.com/images/wiki/roles/marksman.png">
            </img>
          </button>
        </div>
      </div>
      <div className="displayContainer">
        <Display currChamp={champHighlight} />
      </div>
      <div className="champContainer">
        {champCards}
      </div>
      <div className="teamBuilder">
        <label for="team-type">Select Team Type</label>
        <select name="teamType" id="team-type">
          <option value="random">Random</option>
          <option value="tank">Tanky</option>
          <option value="speed">Speedy</option>
          <option value="mana">YOU HAVE NO MANA</option>
        </select>
        <div className="Team">

        </div>
      </div>
    </div >
  )
}



export default App;
