import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const myRecipes = [
  {
    id: 1,
    title: "Pannkaka",
    description: "tillaga",
    time: "30 min",
    ingrediens:
      "3 ägg, 2 ½ dl vetemjöl, 6 dl mjölk, smör (till stekning), 2 msk vaniljsocker, ½ tsk salt",
  },
  {
    id: 2,
    title: "Lasagne",
    description: "tillaga",
    time: "50 min",
    ingrediens:
      "2  gula lökar, 2  vitlöksklyftor, 500 g nötfärs, 1 msk olja,4 msk tomatpuré,1 tsk torkad timjan,1 tsk torkad rosmarin, 500 g krossade tomater,1 köttbuljongtärning, salt, peppar, 9  torkade lasagneplattor",
  },
  {
    id: 3,
    title: "Köttbullar i gräddsås med kokt potatis",
    description: "tillaga",
    time: "45 min",
    ingrediens:
      "900 g fast potatis, 1 dl vatten, 1/2 dl ströbröd, ½ msk senap, ½ tsk salt, 2krm peppar, ca 500g blandfärs, 1 msk smör eller margarin, 2dl vispgrädde, 1msk majsstärkelse, 2 ½ dl vatten, 1 köttbuljongtärning (eller motsvarande mängd fond)",
  },
  {
    id: 4,
    title: "Linssoppa med tomat",
    description: "tillaga",
    time: "30 min",
    ingrediens:
      "1 gul lök, 1 msk olja, 2 vitlöksklyftor, ½ tsk torkad timjan, 1 tsk torkad basilika, 2 tsk paprikapulver, 2  grönsaksbuljongtärningar (eller motsvarande mängd fond), 2 lagerblad, 2 dl torkade röda linser, 1 förp krossade tomater (à 500 g), 10 dl vatten, ½ msk rödvinsvinäger, salt och peppar ",
  },
];

const Home = ({ navigation, route }) => {
  const [recipes, setRecipes] = useState(myRecipes);
  const [search, setSearch] = useState("");

  function filterRecipes() {
    return recipes.filter((recipe) => recipe.title.startsWith(search));
  }

  const filteredRecipes = search ? filterRecipes() : recipes;

  useEffect(() => {
    if (route.params?.recipe) {
      const { recipe } = route.params;
      console.log("recipe", recipe);
      setRecipes((prev) => [...prev, recipe]);
    }
  }, [route.params?.recipe]);

  console.log("recipe", recipes);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("New Recipe")} title="Add" />
      ),
    });
  }, [navigation]);

  const handleItemPress = (item) => {
    navigation.navigate("Details", {
      item,
    });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.todoItem, item.done && styles.doneTodoItem]}
            onPress={() => handleItemPress(item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  doneTodoItem: {
    backgroundColor: "#90EE90",
    textDecorationLine: "line-through",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;
