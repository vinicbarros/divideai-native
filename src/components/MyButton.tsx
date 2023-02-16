import React from "react";
import { Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function MyButton({ title, style, ...other }: MyButtonProps) {
  return (
    <Container {...other} style={[style]}>
      <Text style={styles.text}>{title}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#3a3a44",
  },
});
