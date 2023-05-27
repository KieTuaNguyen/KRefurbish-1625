import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: ' Kiet'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: ' Kiet'
      })
    }, 2000)
  }

  render() {
    console.log('********** Parent Comp render **********')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp