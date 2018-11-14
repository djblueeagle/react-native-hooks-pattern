import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function Input(props) {
  let { value, onChangeText, type, error } = props;
  let textInputStyle = [
    styles.textInputContainer,
    {
      borderColor: error ? "red" : "transparent"
    }
  ];
  return (
    <View style={{ margin: 5 }}>
      <Text>{type}</Text>
      <View style={textInputStyle}>
        <TextInput
          value={value || ""}
          style={{ flex: 1, outline: "none" }}
          onChangeText={value => onChangeText(type, value)}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 5,
    backgroundColor: "#f6f7f9",
    borderWidth: 1,
    width: 204,
    height: 42,
    borderRadius: 8,
    paddingHorizontal: 5
  },
  error: {
    fontSize: 12
  }
});

export default Input;
