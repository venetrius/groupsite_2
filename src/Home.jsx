import React from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import { logOut } from './session'
import { connect } from "react-redux";
import { getUser } from "./redux/selectors";

class Home extends React.Component {

  details = () => {
    return <>
      Hello World
      <button type='link' onClick={logOut}>Kilepes </button>
    </>
  }

  login = () => {
    return <Link to='/session'>
      Log in
  </Link>
  }

  render() {
    var user = this.props.user;

    return (
      <div>
        {user && this.details()}
        {!user && this.login()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: getUser(state) };
};

export default connect(mapStateToProps)(Home);
