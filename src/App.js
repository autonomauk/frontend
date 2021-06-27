import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import "./App.scss";

import Background from './components/background/Background';
import Login from './components/login/Login';
import User from './components/user/User';
import BottomBar from "./components/bottom_bar/BottomBar";

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      jwt: cookies.get('jwt') || undefined
    };
  }

  render() {
    return (
      <div className="App container">
        <Background />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1 id="title" className='display-3'>Spotify Playlister</h1>
              <p>This app adds any new <b>favourited/saved</b> track to a monthly playlist once you "liked" it on Spotify. This generally takes 1-2 minutes to update. Other than logging in, there is nothing else for you to do! Sit back and relax.</p>
              {this.state.jwt ? <User /> : <Login />}
            </div>
          </div>
        </div>
        <BottomBar />
      </div>
    )
  }
}

export default withCookies(App);
