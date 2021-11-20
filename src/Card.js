import React from 'react';

class Card extends React.Component {
  render() {
    const { name, avatar_url, company } = this.props;

    return (
      <div className="card-container">
        <div className="img-container">
          <img src={avatar_url} alt="github photo profile" />
        </div>
        <div className="info">
          <h2 className="name">{name}</h2>
          <p className="company">{company}</p>
        </div>
      </div>
    );
  }
}

export { Card };
