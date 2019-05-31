import React, { Component } from "react";

class Logout extends Component {
  handleSubmit = e => {
    console.log("handleSubmit in Logout hit");
    e.preventDefault();
    this.props.doLogout();
    console.log(this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {/* <h2>Hello World</h2> */}
        <p>LOGOUT FORM HER</p>
        <button
          type="submit"
          onSubmit={this.handleSubmit}
          onClick={console.log("logout button clicked")}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Logout;
