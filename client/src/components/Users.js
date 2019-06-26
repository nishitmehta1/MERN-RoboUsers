import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userTable = this.props.users.map((user, i) => (
      <div className='card eachUser' key={i} style={{ width: '12rem' }}>
        <img
          src={'https://robohash.org/' + user._id + '?size=200x200'}
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{user.user_name}</h5>
          <p className='card-text'>Company: {user.user_company}</p>
          <button className='btn btn-primary'>Edit</button>
        </div>
      </div>
    ));
    return (
      <div>
        <h3>RoboUsers List</h3>
        <div className='user_div'>{userTable}</div>
      </div>
    );
  }
}

export default Users;
