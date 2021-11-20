import React from 'react';
import { Form } from './Form';
import { CardList } from './CardList';
import './style.css';

class App extends React.Component {
  state = {
    profiles: [],
    loading: false,
    error: false,
  };

  fetchData = async (username) => {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    return resp.json();
  };

  addNewProfile = async (username) => {
    try {
      this.setState({ loading: true });
      const data = await this.fetchData(username);
      console.log(data);

      if (data.message === 'Not Found') {
        this.setState({ loading: false, error: true });
        setTimeout(() => {
          this.setState({ error: false });
        }, 3500);
        return;
      }

      const { profiles } = this.state;
      profiles.push(data);
      this.setState({ profiles: [...profiles], loading: false });
    } catch (err) {
      this.setState({ error: true });
    }
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
        {this.state.loading && <p>Loading...</p>}
        {this.state.error && <p>username not found</p>}
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export { App };
