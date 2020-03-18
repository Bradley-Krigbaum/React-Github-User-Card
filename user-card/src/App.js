import React from 'react';

import UserCard from "./components/UserCard";
import './styles.css';


class App extends React.Component {
    state = {
      users: [],
      followers: [],
      userName: ''
    };

  componentDidMount() {
    console.log("bk: App.js: CDM: component mounted");
    fetch("https://api.github.com/users/bradley-krigbaum")
      .then(res => res.json())
      .then(user => this.setState({ users: user }))
      .catch(err => console.error(err))

    fetch(`https://api.github.com/users/bradley-krigbaum/followers`)
      .then(res => res.json())
      .then(follower => this.setState({ followers: follower }))
      .catch(err => console.error(err))
  }

  componentDidUpdate(prevState) {
    console.log("bk: App.js: CDU: component updated");
    if (prevState.users !== this.state.users) {
      // console.log("bk: App.js: CDU: user state has changed");
      // console.log('CDU: user state: ', this.state.users);
      // console.log('CDU: user name: ', this.state.userName);

    }
  }

  handleChange = e => {
    this.setState({...this.state, userName: e.target.value})
  }

  handleFetchUsers = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(user => this.setState({ users: user }))
      .catch(err => console.error(err))
  };

  handleFetchFollower = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => res.json())
      .then(follower => this.setState({ followers: follower }))
      .catch(err => console.error(err))
  }

  handleUserChanges = e => {
    this.handleFetchUsers(e)
    this.handleFetchFollower(e)
  }

  render() {
    // console.log(this.state.users)
    return (
      <div className='App'>
        <h1>GitHub User</h1>

        <div className='SearchUsers'>
          <input
            type="text"
            placeholder='Enter Username'
            value={this.state.userName}
            onChange={this.handleChange}
          />

          <button onClick={(e)=>this.handleUserChanges(e)}>Find User</button>
        </div>

        <div>
          <UserCard users={this.state.users} />

          {this.state.followers.map(users => (
            <UserCard users={users}/>
          ))}

        </div>

      </div>
    );
  }
}

export default App;
