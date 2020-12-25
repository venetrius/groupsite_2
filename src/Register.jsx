
import { Redirect } from "react-router-dom";
import { getUser } from "./redux/selectors";
import { connect } from "react-redux"


function Register(props) {
  if (props.user) {
    return <Redirect to={{ pathname: "/home" }} />
  }

  return (<button>Log in</button>)
}

const mapStateToProps = state => {
  return { user: getUser(state) };
};

export default connect(mapStateToProps)(Register);

