import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FrontScene from './FrontScene';
import Admin from './Components/AdminPanel';
import Login from './Components/LoginComponent';
import Update from './Components/UpdatePassword';
import PrivateRoute from './Components/PrivateRoute';

function Main(){
    return(
        <Switch>
            <Route path='/home' exact component={() => <FrontScene />}/>
            <Route path='/login' exact component={(props) => <Login {...props}/>} />
            <PrivateRoute path='/dashboard' exact component = {(props) => <Admin {...props}/>} />
            <Route path='/updatePasswd' exact component = {(props) => <Update {...props} /> } />
            <Redirect to='/home' /> 
        </Switch>
    )
}

export default Main;