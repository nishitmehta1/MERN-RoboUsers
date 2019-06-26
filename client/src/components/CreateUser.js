import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      user_ein: '',
      user_university: '',
      user_gender: '',
      user_company: ''
    };
  }

  onChangeUserCompany = e => {
    this.setState({
      user_company: e.target.value
    });
  };

  onChangeUserName = e => {
    this.setState({
      user_name: e.target.value
    });
  };
  onChangeUserPassword = e => {
    this.setState({
      user_password: e.target.value
    });
  };
  onChangeUserEin = e => {
    this.setState({
      user_ein: e.target.value
    });
  };
  onChangeUserGender = e => {
    this.setState({
      user_gender: e.target.value
    });
  };
  onChangeUserUniversity = e => {
    this.setState({
      user_university: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(
      `Submitted ${this.state.user_name}, ${this.state.user_ein}, 
      ${this.state.todo_university}`
    );

    const newUser = {
      user_name: this.state.user_name,
      user_password: this.state.user_password,
      user_ein: this.state.user_ein,
      user_university: this.state.user_university,
      user_gender: this.state.user_gender,
      user_company: this.state.user_company
    };

    axios.post('http://localhost:4000/users/add', newUser).then(res => {
      console.log(res.data);
    });

    this.setState({
      user_name: '',
      user_password: '',
      user_ein: '',
      user_university: '',
      user_gender: '',
      user_company: ''
    });
  };

  render() {
    return (
      <div className='create_user container' style={{ margintTop: 10 }}>
        <h3>Create New RoboUser</h3>
        <form action='' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor=''>RoboUser Name: </label>
            <input
              required
              type='text'
              className='form-control'
              value={this.state.user_name}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password: </label>
            <input
              required
              type='text'
              className='form-control'
              value={this.state.user_password}
              onChange={this.onChangeUserPassword}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>EIN: </label>
            <input
              required
              type='text'
              placeholder='Employee Identification Number'
              className='form-control'
              value={this.state.user_ein}
              onChange={this.onChangeUserEin}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>University: </label>
            <input
              required
              type='text'
              className='form-control'
              value={this.state.user_university}
              onChange={this.onChangeUserUniversity}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Company: </label>
            <input
              required
              type='text'
              className='form-control'
              value={this.state.user_company}
              onChange={this.onChangeUserCompany}
            />
          </div>
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                id='pFemale'
                value='Female'
                checked={this.state.user_gender === 'Female'}
                onChange={this.onChangeUserGender}
              />
              <label htmlFor='' className='form-check-label'>
                Female
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                id='pMale'
                value='Male'
                checked={this.state.user_gender === 'Male'}
                onChange={this.onChangeUserGender}
              />
              <label htmlFor='' className='form-check-label'>
                Male
              </label>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create RoboUser'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
