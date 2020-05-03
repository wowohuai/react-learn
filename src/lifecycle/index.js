import React, { Component } from 'react'


/**
 * 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下
 * constructor
 * getDerivedStateFromProps
 * shouldComponentUpdate (forceUpdate会跳过该方法)
 * render
 * getSnapshotBeforeUpdate
 * componentDidMount / componentDidUpdate / componentWillUnmount()
 * 生命周期图示  -->  http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 
 */
class LifeCycle extends Component {
  constructor(props) {
    super(props)

    // 构造函数仅用于以下两种情况, 不要在这里调用 this.setState()
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps', props, state)
    return state
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  handleClick(e) {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
    e.stopPropagation()
    console.log('click')
  }
  shouldComponentUpdate(nextProps, nextState){
    // Make sure to return true or false
    console.log('shouldComponentUpdate',nextProps, nextState)
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }
  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        {this.state.counter}
      </div>
    )
  }
}

export default LifeCycle