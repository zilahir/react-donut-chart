import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Example from './example'

class App extends Component {
  render () {
    return (
      <div>
        <p>
            <Example />
        </p>
      </div>

    )
  }

}

ReactDOM.render(<App />, document.querySelector('#app'))
