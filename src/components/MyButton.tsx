import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { ButtonContainer, ButtonTitle } from "./styles";

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
  fontColor: string;
  cor?: string;
  dcor?: string;
  border?: string;
  width?: string;
}

export default function MyButton({
  title,
  style,
  fontColor,
  ...other
}: MyButtonProps) {
  return (
    <ButtonContainer {...other} style={[style]} activeOpacity={0.5}>
      <ButtonTitle fontColor={fontColor}>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
