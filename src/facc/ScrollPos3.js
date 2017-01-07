import React, { Component, PropTypes } from 'react'

class ScrollPos3 extends Component {

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    ratio: null
    // position: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getBounds = (element) => {
    if (this.bounds) return
    this.bounds = element && element.getBoundingClientRect()
  }

  handleScroll = (event) => {
    const windowSize = window.innerHeight
    const scrollTop = event.srcElement.body.scrollTop
    const visibleSpace = windowSize + (this.bounds.bottom - this.bounds.top)
    let visibleRatio = ((windowSize + scrollTop) - this.bounds.top + this.bounds.height)/visibleSpace

    if (visibleRatio < 0) visibleRatio = 0
    if (visibleRatio > 1) visibleRatio = 1

    this.setState({
      ratio: visibleRatio
    })
  }

  render() {
    return (
      <div ref={this.getBounds}>{ this.props.children(this.state.ratio) }</div>
    )
  }
}
export default ScrollPos3
