import React from 'react';
import { Form } from './Form';
import { CardList } from './CardList';
import './style.css';

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = async (username) => {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = await resp.json();

    console.log(data);

    this.state.profiles.push(data);
    console.log(this.state.profiles);
    this.setState({ profiles: [...this.state.profiles] });
  };

  render() {
    const { title } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <Form
          profiles={this.state.profiles}
          addNewProfile={this.addNewProfile}
        />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export { App };
