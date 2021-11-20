import React from 'react';
import { Card } from './Card';

function CardList({ profiles }) {
  return (
    <ul>
      {profiles.map((user) => (
        <Card {...user} />
      ))}
    </ul>
  );
}

export { CardList };
