import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
