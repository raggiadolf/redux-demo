import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Submit name"
          onPress={() => console.log(this.state.text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
