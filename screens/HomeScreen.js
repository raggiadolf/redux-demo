import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { MonoText } from "../components/StyledText";

class HomeScreen extends React.Component {
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
    color: "rgba(100,100,100, 0.8)"
  }
});

export default connect()(HomeScreen);
