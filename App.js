import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = goal => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
  };

  const deleteHandler = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem value={itemData.item.value} onDelete={() => deleteHandler(itemData.item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
