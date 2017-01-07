import React, { Component, PropTypes } from 'react'

class ScrollPos1 extends Component {

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}
export default ScrollPos1
