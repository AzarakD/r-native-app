import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalHandler = (goalText) => {
    setGoals((prev) => [
      ...prev,
      {
        text: goalText,
        id: Math.random().toString(),
      },
    ]);
    closeModalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={showModalHandler}
        />

        <GoalInput {...{ addGoalHandler, closeModalHandler, isModalVisible }} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem
                id={item.id}
                text={item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 16,
  },
});
