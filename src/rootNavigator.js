import {
  createStackNavigator,
} from "react-navigation";

import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";


/**
 * stack navigation
 */
function stackNavigation() {
  const StackRouteConfig = {
    login: {
      screen: LoginContainer,
    },
    home: {
      screen: HomeContainer,
    }
  };

  const StackNavigatorConfig = {
    initialRouteName: "login",
    transparentCard: true,
    headerMode: "none",
  };

  return createStackNavigator(StackRouteConfig, StackNavigatorConfig);
}

const rootNavigator = stackNavigation();

export default rootNavigator;
