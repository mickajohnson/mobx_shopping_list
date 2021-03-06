import React, { Component } from 'react';

class App extends Component {
  render() {
    const { groceries } = this.props.store;
    return (
      <div style={{ padding: '0px 30px' }}>
        <h1 style={{ textAlign: 'center' }}>
          Mobx Shopping List
        </h1>
        <ul>
          {groceries.map(grocery => (
            <li key={grocery}>{grocery}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
