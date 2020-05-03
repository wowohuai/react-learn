import React, { Component, Fragment } from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'

export default class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToogle = this.handleToogle.bind(this)
  }
  handleToogle() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
  render() {
    return (
      <Fragment>
        <CSSTransition 
        in={this.state.show} 
        timeout={200} 
        unmountOnExit
        appear={true}
        classNames="my-node">
          <div >hello world</div>
        </CSSTransition>
        <button onClick={this.handleToogle}>toggle</button>
      </Fragment>
     
    )
  }
}
