// rce + tab = class based component
import React, { Component } from 'react'

export class LifecycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Kiet'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
  }


  render() {
    return (
      console.log('LifecycleB render'),
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB