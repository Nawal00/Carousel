import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './css/partials/responsive.sass'
import './css/partials/carousel.sass'
import './css/style.sass'

import Carousel from './components/Carousel'

class App extends React.Component {
  render() {

    return (

      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Carousel} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
