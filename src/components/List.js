import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    return (
      <div>
        <p>a list component</p>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default List;
