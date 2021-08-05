import React from 'react';
import { Button } from 'react-bootstrap';

import './Login.scss';

function LoginButton() {
    return <a href={'/api/login'}>
        <Button type="button" variant='primary'>Login  <i className="fab fa-spotify"></i></Button>
    </a>
}

export default class Login extends React.Component {
    render() {
        return <LoginButton/>
    }
}