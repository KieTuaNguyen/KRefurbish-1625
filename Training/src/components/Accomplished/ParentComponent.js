// Import nhanh rce + tab
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent

// NOTE STEP 1: In the ParentComponent.js, we define the method greetParent() that takes childName as a parameter.
// We pass this method as a prop greetHandler to the ChildComponent.js.
// We bind the this context to the greetParent() method in the constructor.
// We pass the parameter 'Parent' to the greetHandler() method.