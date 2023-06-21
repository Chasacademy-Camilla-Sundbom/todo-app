import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

let count = 10000;

const Add = ({ navigation, route }) => {
  const [title, onChangeTitle] = useState("");
  const [desc, onChangeDesc] = useState("");
  const [ingrediens, onChangeIngrediens] = useState("");
  const [time, onChangeTime] = useState("");

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDesc}
        value={desc}
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeIngrediens}
        value={ingrediens}
        placeholder="Ingrediens"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTime}
        value={time}
        placeholder="Time"
      />
      <Button
        onPress={() => {
          const recipe = {
            title,
            desc,
            ingrediens,
            time,
            id: count++,
          };

          console.log("Add", recipe);
          navigation.navigate("Recipes", { recipe });
        }}
        title="Done"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Add;
