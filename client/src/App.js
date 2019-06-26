import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/Users.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchBox from './components/SearchBox.js';
import CreateUser from './components/CreateUser.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchVal: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/users')
      .then(res => {
        this.setState(
          {
            users: res.data
          },
          () => {
            console.log(this.state.users);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate = () => {
    axios
      .get('http://localhost:4000/users')
      .then(res => {
        this.setState(
          {
            users: res.data
          },
          () => {
            console.log(this.state.users);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = searchVal => {
    this.setState({
      searchVal
    });
  };

  render() {
    let users = this.state.users.filter(user => {
      return (
        user.user_name
          .toLowerCase()
          .indexOf(this.state.searchVal.toLowerCase()) !== -1
      );
    });
    return (
      <Router path='/'>
        <div className='main_div'>
          <CreateUser />
          <div className='users container'>
            <SearchBox
              value={this.props.searchVal}
              handleChange={this.handleChange}
            />
            <Users users={users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
