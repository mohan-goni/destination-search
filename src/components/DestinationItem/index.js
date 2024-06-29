import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <li className="card_container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
