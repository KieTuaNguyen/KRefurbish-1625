import React, { Component } from 'react'
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Step2: Wrap the component tree with the provider */}
        <UserProvider value="Kiet">
          <ComponentC />
        </UserProvider>
        <ComponentC />
      </div>
    )
  }
}

export default App