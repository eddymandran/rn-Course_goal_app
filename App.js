import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //using a function to be sure to have the updated state
    setcourseGoals((currentGoals) => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView >
        {courseGoals.map((goal, index) => (
          <View style={styles.listItem} key={index}><Text>{goal}</Text></View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
      padding : 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
  }
});
