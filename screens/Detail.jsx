import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Detail = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.description}>{item.ingrediens}</Text>
        <Text style={styles.description}>{item.time}</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
  },

  footer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
});

export default Detail;
