import React from 'react';

class Form extends React.Component {
  state = {
    username: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.props.addNewProfile(this.state.username);
    this.setState({ username: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" className="form">
        <label htmlFor="">
          <input
            type="text"
            className="input"
            placeholder="GitHub username"
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
            required
          />
        </label>
        <button className="add-btn">Add card</button>
      </form>
    );
  }
}

export { Form };
