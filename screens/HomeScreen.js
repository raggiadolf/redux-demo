import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MonoText style={styles.codeHighlightText}>Hello, world!</MonoText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  }
});
