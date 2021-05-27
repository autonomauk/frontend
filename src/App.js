import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import "./App.scss";
import moment from "moment";
import queryString from 'query-string';

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      id: cookies.get('id') || undefined
    };
  }

  componentDidMount() {
    const { cookies } = this.props;
    const parsed = queryString.parse(window.location.search);
    if (parsed.id) {
      cookies.set('id', parsed.id, { path: '/', sameSite: true })
      this.setState({ id: parsed.id })
    }
  }

  handleLogout() {
    const { cookies } = this.props;
    
    fetch('/api/logout',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: cookies.get('id') })
      })
      .then(res => {
        cookies.remove('id');
        this.setState({id:undefined});
      })

  }

  render() {

    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Spotify Playlister</h1>
              <p>This app adds any new <b>favourited/saved</b> track to a monthly playlist. The current playlist is: {moment().format("MMMM YY")}</p>

              <div className="todo-app">
                <LogOutButton
                  userLoggedIn={this.state.id !== undefined}
                  onClick={this.handleLogout.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function LogOutButton(props) {

  return props.userLoggedIn
    ?
    <button type="button" onClick={props.onClick} >Logout (ends subscription)</button>
    :
    <a href='/api/login'><button type="button">Login with Spotify!</button></a>
}


export default withCookies(App);
