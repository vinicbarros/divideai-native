import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../screens/LandingPage";
import { PublicStackParam } from "../types/NavigationTypes";

const Stack = createNativeStackNavigator<PublicStackParam>();

export function PublicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
      />
    </Stack.Navigator>
  );
}
