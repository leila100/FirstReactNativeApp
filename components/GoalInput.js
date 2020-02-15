import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState("");

  const inputHandler = text => {
    setGoal(text);
  };

  const onAdd = () => {
    props.addGoalHandler(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.entry}>
        <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={inputHandler} value={goal} />
        <View style={styles.buttons}>
          <Button title='ADD' onPress={onAdd} />
          <Button title='CANCEL' onPress={props.onCancel} color='red' />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  entry: { flex: 1, justifyContent: "center", alignItems: "center" },
  textInput: { borderColor: "black", borderWidth: 1, padding: 10, width: "80%", marginBottom: 10 },
  buttons: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "40%" }
});

export default GoalInput;
