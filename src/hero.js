import React from 'react';
import {Header} from './header.js';
import FilterButton from './filter-button.js'
import './filter.css'
import './hero.css';

class Hero extends React.Component {
  constructor() {
    super()
    this.state = {
      showAll: null,
      showEven: null,
      showOdd: null
    }
  }
  componentDidMount(){
    this.setState({showAll: true})
  }
  toggleButtons = (value) => {
    if (value === 'show all'){
      this.setState({showAll: true, showEven: false, showOdd: false})
    }else if (value === 'show even'){
      this.setState({showAll: false, showEven: true, showOdd: false})
    }else{
      this.setState({showAll: false, showEven: false, showOdd: true})
    }
  }

  // These three functions are responsible for toggling the css class on the buttons
  // making them either 'clicked or unclicked'
  showAll = () => (this.state.showAll ? '-clicked' : '')
  showEven = () => (this.state.showEven ? '-clicked' : '')
  showOdd = () => (this.state.showOdd ? '-clicked' : '')

  render () {
    return (
      <div className="hero">
        <Header />
        <div className='greeting'>
          <h1> Why Hello There</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accu-santium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </p>
        </div>
        <div className='filter-container'>

          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show all'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showAll()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show even'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showEven()}>
                        </FilterButton>
          <FilterButton filterBoxes={this.props.filterBoxes.bind(this)}
                        value='show odd'
                        toggleButtons={this.toggleButtons.bind(this)}
                        selectedButton={this.showOdd()}>
                       </FilterButton>
        </div>
      </div>
    )

  }
}

export default Hero
