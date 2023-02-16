import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { PrivateStack } from "./PrivateStack";
import { PublicStack } from "./PublicStack";

export default function Router() {
  const token = false;

  return (
    <NavigationContainer>
      {token ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
