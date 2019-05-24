import { connect } from 'react-redux';
import { HomePage } from '../components/home';

/**
 * mapping state from store to the container
 */
const mapStateTopProps = (state) => {
    return {
        credentials : state.auth_r.credentials
    }
}
/**
 * mapping dispatch container
 */
const mapDispatchProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateTopProps, mapDispatchProps)(HomePage)