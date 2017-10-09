import React, {Component} from 'react'
import io from 'socket.io-client'

class App extends Component {
  constructor () {
    super()
    this.socket = 'helo'
  }

  // componentWillMount () {
  //   this.socket = io('http://localhost:3000')

  //   this.socket.on('connect', this.connect)
  // }

  connect () {
    alert('connected: ' + this.socket)
  }

  render () {
    return <h1> Hello World form React ?? </h1>
  }
}

export default App
