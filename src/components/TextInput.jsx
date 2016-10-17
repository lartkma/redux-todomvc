import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return <input className="edit"
      autoFocus={true} type="text" />
  }
}
