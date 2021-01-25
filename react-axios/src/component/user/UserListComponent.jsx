import React, { Component } from 'react';
import ApiService from "../../ApiService";

class UserListComponent extends Component {
    constructor(props) {
        super(props);

        // array list of users
        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
        .then( res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() err', err);
        })
    }

    deleteUser = (userID) => {
        
        //delete user from DB
        ApiService.deleteUser(userID)
        .then( res => {
            this.setState({
                message: 'User Deleted Successfully'
            });

            //reload your list using filter
            this.setState({
                users: this.state.users.filter( user =>
                    user.id !== userID)
            });
        })
        .catch(err => {
            console.log('deletedUser() err', err);
        })
    }

    editUser = (ID) => {
        // save user id temporarily in local storage
        window.localStorage.setItem("userID", ID);

        // reroute to EditUserComponent.jsx
        this.props.history.push('/edit-user');
    }

    addUser = () => {

        // delete user id that is saved 
        window.localStorage.removeItem("userID");

        // reroute to AddUserComponent.jsx
        this.props.history.push('/add-user');
    }

    render(){
        return(
            <div>
                <h2>User List</h2>
                <button onClick={this.addUser}>Add User</button>
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Age</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( user =>
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.username}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <button onClick={() => this.editUser(user.id)}>Edit</button>
                                    <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }


}

export default UserListComponent;