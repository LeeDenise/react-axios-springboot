import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={UserListComponent}></Route>
                    <Route path="/users" component={UserListComponent}></Route>
                    <Route path="/add-user" component={AddUserComponent}></Route>
                    <Route path="/edit-user" component={EditUserComponent}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;