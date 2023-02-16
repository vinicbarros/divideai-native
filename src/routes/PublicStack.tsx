import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../screens/LandingPage/LandingPage";
import { PublicStackParam } from "../types/NavigationTypes";

const Stack = createNativeStackNavigator<PublicStackParam>();

export function PublicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
