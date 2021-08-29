import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import "./DefaultPage.scss";

import Login from '../../components/login/Login';
import User from '../../components/user/User';

import GenericPage from "../GenericPage/GenericPage";
import Logo from "../../components/logo/Logo";

class DefaultPage extends React.Component {
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
      <GenericPage>
        <Logo/>
        <p>We automate your playlists through normal Spotify features. <i className="fas fa-thumbs-up"></i> a song on the go and let our algorithms deal with the rest. Choose from multiple settings to make Autonoma behave just the way you want it to!</p>
        {this.state.jwt ? <User /> : <Login />}
      </GenericPage>
    )
  }
}

export default withCookies(DefaultPage);