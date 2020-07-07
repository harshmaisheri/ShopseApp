import { createStackNavigator } from "react-navigation-stack";

import Landing from "../screens/Landing";
import Form from "../screens/Form";
import Otp from "../screens/Otp";

export default createStackNavigator(
  {
    Landing,
    Form,
    Otp,
  },
  {
    initialRouteName: "Landing",
  }
);
