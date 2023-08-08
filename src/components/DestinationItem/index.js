import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <div className="each-item-div">
      <img src={imgUrl} alt={name} className="img-decor" />
      <p>{name}</p>
    </div>
  )
}
export default DestinationItem
