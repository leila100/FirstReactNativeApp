import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = text => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    console.log(goal);
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.entry}>
        <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={inputHandler} value={goal} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <View style={styles.goalItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
