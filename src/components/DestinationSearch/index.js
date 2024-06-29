import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    text: '',
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {text} = this.state

    const filteredDestinationList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(text.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            placeholder="Search"
            className="input"
            onChange={this.onChangeText}
            value={text}
          />
          <div className="cards-container">
            {filteredDestinationList.map(eachItem => (
              <DestinationItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
