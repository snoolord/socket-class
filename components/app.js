import React, {Component} from 'react'
import io from 'socket.io-client'

class App extends Component {
  constructor (props) {
    super(props)
    this.socket = 'hello'
    this.connect = this.connect.bind(this)
  }

  componentDidMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  }

  connect () {
    alert('connected: ' + this.socket.id)
  }

  render () {
    return <h1> Hello World form React ?? </h1>
  }
}

export default App
