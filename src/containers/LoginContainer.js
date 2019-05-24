import { connect } from "react-redux";
import { _login } from "../actions/auth/authActions";
import { LoginPage } from "../components/login";

/**
 * mapping state from store to the container
 */
const mapStateTopProps = state => {
  return {
    credentials : state.auth_r.credentials
  };
};
/**
 * mapping dispatch container
 */
const mapDispatchProps = dispatch => {
  return {
    _login : (data) => dispatch(_login(data))
  };
};

export default connect(mapStateTopProps, mapDispatchProps)(LoginPage);
