import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.entry}>
        <TextInput placeholder='Course Goal' style={styles.textInput} />
        <Button title='ADD' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  entry: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  textInput: { borderColor: "black", borderWidth: 1, padding: 10, width: "80%" }
});
