import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer
} from "react-navigation-redux-helpers";

import { connect } from "react-redux";

/**
 * creates root navigation for app
 */
import rootNavigator from "./rootNavigator";

/**
 * navigation reducer
 */
const navReducer = createNavigationReducer(rootNavigator);

/**
 * navigation middleware
 */
const navigationmiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

/**
 * root redux container
 */
const App = createReduxContainer(rootNavigator);

/**
 * mapping navigation prop to state
 */
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export { AppWithNavigationState, navReducer, navigationmiddleware };
