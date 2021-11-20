import React from 'react';
import './style.css';

class App extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <h1>{title}</h1>
      </div>
    );
  }
}

export { App };
