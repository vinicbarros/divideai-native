import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PrivateStackParam = {
  Home: undefined;
  History: undefined;
};

export type PublicStackParam = {
  SignIn: undefined;
  SignUp: undefined;
  LandingPage: undefined;
};

export type HomeScreenProp = NativeStackNavigationProp<
  PrivateStackParam,
  "Home"
>;

export type LandingPageProp = NativeStackNavigationProp<
  PublicStackParam,
  "LandingPage"
>;
