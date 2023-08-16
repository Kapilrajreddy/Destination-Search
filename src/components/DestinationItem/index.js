// Write your code here
import './index.css'

function DestinationItem(props) {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <div className="Destination-item-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p>{name}</p>
    </div>
  )
}
export default DestinationItem

/*
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="app-container">
      <div>
        <img src={imgUrl} className="app-img" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
*/
