import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import { HomeScreenProp } from "../types/NavigationTypes";

export default function Home() {
  const { navigate } = useNavigation<HomeScreenProp>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home page just</Text>
      <MyButton
        onPress={() => navigate("History")}
        title="Ir para histórico"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
