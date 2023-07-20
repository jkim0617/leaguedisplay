import "./display.css"

let Display = ({ currChamp }) => {
  return (
    <div className="displayContainer">
      <img src={currChamp.icon}></img>
      <h1>{currChamp.name}</h1>
      <h2>{currChamp.title}</h2>
      <p>{currChamp.description}</p>
    </div>
  )
}

export default Display