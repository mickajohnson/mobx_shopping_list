import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  filterGroceries = (e) => {
    this.props.store.updateFilter(e.target.value)
  }
  render() {
    console.log('rendred')
    const { filteredGroceries, filter } = this.props.store;
    return (
      <div style={{ padding: '0px 30px' }}>
        <h1 style={{ textAlign: 'center' }}>
          Mobx Shopping List
        </h1>
        <input value={filter} onChange={this.filterGroceries} />
        <ul>
          {filteredGroceries.map(grocery => (
            <li key={grocery}>{grocery}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
