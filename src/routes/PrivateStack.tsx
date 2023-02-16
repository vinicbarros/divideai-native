import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "../screens/History";
import Home from "../screens/Home";
import { PrivateStackParam } from "../types/NavigationTypes";

const Stack = createNativeStackNavigator<PrivateStackParam>();

export function PrivateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="History"
        component={History}
      />
    </Stack.Navigator>
  );
}
