import React, {Component} from 'react'
import Header from './parts/header'
import io from 'socket.io-client'

class App extends Component {
  constructor (props) {
    super(props)
    this.socket = {}
    this.state = {
      status: 'disconnected'
    }
    this.connect = this.connect.bind(this)
  }

  componentDidMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  }
  connect () {
    this.setState({
      status: 'connected'
    })
  }

  render () {
    return (
      <div>
        <Header title='New Header' status={this.state.status} />
      </div>
    )
  }
}

export default App
