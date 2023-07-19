import "./Cards.css"

let Cards = ({ championInfo, setChampHighlight }) => {
  return (
    <div className="cardContainer" onClick={() => {
      setChampHighlight(championInfo)
    }}>
      <img src={championInfo.icon}></img>
      <h1>{championInfo.name}</h1>
      <h2>{championInfo.title}</h2>
    </div>
  )
}

export default Cards

// fighter tank mage assassin support marksman