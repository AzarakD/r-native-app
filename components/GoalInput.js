import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    if (goalText) {
      props.addGoalHandler(goalText);
      setGoalText("");
    }
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Type your goal here"
          value={goalText}
          onChangeText={goalInputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" color="#5e0acc" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.closeModalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    padding: 16,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
