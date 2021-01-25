import React, { Component } from 'react';
import ApiService from '../../ApiService';

class AddUserComponent extends  Component {

    constructor(props) {
        super(props);

        // user information 
         this.state = {
             username: '',
             password: '',
             firstName: '',
             lastName: '',
             age: '',
             salary: '',
             message: null
         }
    }

    onChange = (e) => {

        // save state dynamically (when the name of the property is unknown upfront but runtime)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {

        // cancel the event if it is cancelable, meaning that the default action 
        // that belong to the event will not occur.
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary
        }

        ApiService.addUser(user)
        .then( res => {
            this.setState({
                message: user.username + "registered successfully."
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch ( err => {
            console.log('saveUser() err', err);
        });
    }

    render() {
        return(
            <div>
                <h2>Add User</h2>
                <form>
                    <div>
                        <label>User Name:</label>
                        <input type="text" placeholder="" name="username"
                         value={this.state.username} onChange={this.onChange}></input>
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder="" name="password"
                         value={this.state.password} onChange={this.onChange}></input>
                    </div>

                    <div>
                        <label>First Name:</label>
                        <input type="text" placeholder="" name="firstName"
                         value={this.state.firstName} onChange={this.onChange}></input>
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input type="text" placeholder="" name="lastName"
                         value={this.state.lastName} onChange={this.onChange}></input>
                    </div>

                    <div>
                        <label>Age:</label>
                        <input type="number" placeholder="" name="age"
                         value={this.state.age} onChange={this.onChange}></input>
                    </div>

                    <div>
                        <label>Salary:</label>
                        <input type="number" placeholder="" name="salary"
                         value={this.state.salary} onChange={this.onChange}></input>
                    </div>

                    <button onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;