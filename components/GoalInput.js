import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  return (
    <View style={styles.entry}>
      <TextInput
        placeholder='Course Goal'
        style={styles.textInput}
        onChangeText={props.inputHandler}
        value={props.goal}
      />
      <Button title='ADD' onPress={props.addGoalHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  entry: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  textInput: { borderColor: "black", borderWidth: 1, padding: 10, width: "80%" }
});

export default GoalInput;
