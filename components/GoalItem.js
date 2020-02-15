import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const GoalItem = props => {
  return (
    <TouchableHighlight onPress={() => props.onDelete()} underlayColor={"maroon"}>
      <View style={styles.goalItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableHighlight>
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
