import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  static defaultProps () {
    return {
      status: 'disconnected'
    }
  }

  render () {
    console.log(this.props)
    return (
      <header className="row">
        <div className="col-xs-18">
        <h1>{this.props.title}</h1>
        </div>
        <div className="col-cs-2">
          <span id="connection-status" className={ this.props.status }>
          </span>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
