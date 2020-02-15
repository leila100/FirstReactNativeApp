import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goal => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  };

  const deleteHandler = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput addGoalHandler={addGoalHandler} onCancel={cancelHandler} visible={isAddMode} />
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
