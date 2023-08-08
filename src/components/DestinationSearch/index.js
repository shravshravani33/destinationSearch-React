const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl, id} = destinationsList

  return (
    <div className="search-div">
      <input type="search" placeholder="Search" className="bar" />{' '}
      <img
        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        alt="search icon"
      />
    </div>
  )
}
export default DestinationSearch
