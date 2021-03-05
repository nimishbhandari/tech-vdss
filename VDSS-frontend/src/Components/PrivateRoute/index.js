import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props){

    return (
        <>
            {
                localStorage.getItem('login') ? <Route exact = {props.exact} path={props.path} component = {props.component} /> :
                <Redirect to='/' />
            }
        </>
    )
}

export default PrivateRoute