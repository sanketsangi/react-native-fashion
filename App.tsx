import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "./src/Authentication";

const fonts = {
  "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
  "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
  "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer {...{ fonts }}>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
