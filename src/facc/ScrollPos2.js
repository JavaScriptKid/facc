import React, { Component, PropTypes } from 'react'

class ScrollPos2 extends Component {

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    // position: null
    position: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = event.srcElement.body.scrollTop
    this.setState({
      position: scrollTop
    })
  }

  render() {
    return (
      <div>{ this.props.children(this.state.position) }</div>
    )
  }
}
export default ScrollPos2
