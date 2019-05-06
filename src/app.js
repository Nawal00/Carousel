import React from 'react'
import ReactDOM from 'react-dom'

import './css/carousel.sass'
import './css/style.sass'

import Carousel from './components/Carousel'

class App extends React.Component {
  render() {

    return (
      <main>
        <h1> our charter destinations </h1>
        <Carousel />
        <a href='#'><button> View all destinations </button></a>
      </main>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
