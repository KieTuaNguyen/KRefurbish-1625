import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1 style={{ color: 'red' }}>Something went wrong!</h1>
        </React.Fragment>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary