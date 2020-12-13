import React, { Component } from 'react'
  
  export default class New_items extends Component {
    handleClick() {
      var first_name = this.ref.first_name.value;
      var last_name = this.ref.last_name.value;
      var email = this.ref.email.value;
      var slogan= this.ref.slogan.value;
      $.ajax({
        url: "/api/v1/contests",
        type: "POST",
        data: { item: { first_name: first_name, last_name: last_name,email: email, slogan: slogan } },
        success: item => {
          this.props.handleSubmit(item);
        }
      });
    }
    render() {
      return (
        <div>
          <input ref="first_name" placeholder="Enter First name:" />
          <input ref="last_name" placeholder="Enter Last Name:" />
          <input ref="email" placeholder="example@gmail.com" />
          <input ref="slogan" placeholder="Enter a slogan" />

          <button onClick={this.handleClick}>Submit</button>
        </div>
      );
    }
  };
  