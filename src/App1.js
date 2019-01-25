import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  // applyFilter = (e) => {
  //   this.props.store.filter = e.target.value
  // }
  render() {
    console.log('rendered')
    const { groceries, filter } = this.props.store;
    return (
      <div style={{ padding: '0px 30px' }}>
        <h1 style={{ textAlign: 'center' }}>
          Mobx Shopping List
        </h1>
        <h4>
          Filter:
        </h4>
        {/* <input value={filter} onChange={this.applyFilter} /> */}
        <ul>
          {groceries.map(grocery => (
            <li key={grocery}>
              {grocery}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
