import "./display.css"

let Display = ({ currChamp }) => {
  return (
    <div className="displayContainer">
      <div className="displayUpper">
        <div className="basicInfoContainer">
          <img src={currChamp.icon}></img>
          <h1>{currChamp.name}</h1>
          <h2>{currChamp.title}</h2>
        </div>
        <div className="statContainer">
          <h2>HP: {currChamp.stats.hp}</h2>
          <h2>Armor: {currChamp.stats.armor}</h2>
          <h2>Movement Speed: {currChamp.stats.movespeed}</h2>
        </div>
      </div>
      <p>{currChamp.description}</p>
    </div>
  )
}

export default Display