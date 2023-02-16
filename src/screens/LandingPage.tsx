import { View, Button, Text } from "react-native";

export default function LandingPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Logar</Text>
      <Button
        title="Logar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
