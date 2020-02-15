import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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
      <GoalInput inputHandler={inputHandler} goal={goal} addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem value={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
