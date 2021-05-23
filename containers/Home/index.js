import React, { Component } from "react";
import UserList from "./../../components/UserList";
import data from "./../../users.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ users: data });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>

          <div className="col">
            <div className="row">
              <div className="col">
                <h1 className="text-center h3">USERS LIST</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <UserList users={this.state.users} />
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Home;
