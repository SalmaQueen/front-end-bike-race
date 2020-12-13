import React, { Component } from 'react'
  
  export default class All_items extends Component {

    handleDelete(id) {
      $.ajax({
          url: `/api/v1/contects/${id}`,
          type: 'DELETE',
          success(response) {
              console.log('successfully removed item')
          }
      });
  }
  render() {
    var items = this.props.items.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.first_name}</h3>
          <h3>{item.last_name}</h3>
          <h3>{item.email}</h3>
          <p>{item.slogan}</p>
          <button onClick={this.handleDelete.bind(this, item.id)} >Delete</button>
        </div>
      );
    });

    return <div>{items}</div>;
  }
};