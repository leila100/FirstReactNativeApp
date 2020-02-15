import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = text => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    console.log(goal);
    setGoals(currentGoals => [...currentGoals, goal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.entry}>
        <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={inputHandler} value={goal} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goals.map((g, idx) => (
          <View style={styles.goalItem} key={idx}>
            <Text>{g}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  entry: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  textInput: { borderColor: "black", borderWidth: 1, padding: 10, width: "80%" },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
