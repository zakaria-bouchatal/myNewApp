import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

interface Order {
    id: string;
    title: string;
    price: string;
    status: string;
    image: any;
  }
  
const orders = [
  {
    id: "1",
    title: "Smoked Jollof Rice with Chicken",
    price: "$35",
    status: "Completed",
    image: require("../../assets/images/ebcbb960d5d992314b90ba13029e05b31.png"),
  },
  {
    id: "2",
    title: "Smoked Jollof Rice with Chicken",
    price: "$35",
    status: "Ongoing",
    image: require("../../assets/images/ebcbb960d5d992314b90ba13029e05b31.png"),
  },
    {
        id: "3",
        title: "Smoked Jollof Rice with Chicken",
        price: "$35",
        status: "Completed",
        image: require("../../assets/images/ebcbb960d5d992314b90ba13029e05b31.png"),
    },
    {
        id: "4",
        title: "Smoked Jollof Rice with Chicken",
        price: "$35",
        status: "Ongoing",
        image: require("../../assets/images/ebcbb960d5d992314b90ba13029e05b31.png"),
    },
];

const OrderCard: React.FC<{ order: Order }> = ({ order }) => (
    <View style={styles.card}>
      <Image source={order.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{order.title}</Text>
        <Text style={styles.price}>{order.price}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{order.status}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.buttonTextOutline}>Leave Review</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSolid}>
            <Text style={styles.buttonTextSolid}>Order Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  


const OngoingOrders = () => (
  <FlatList
    data={orders.filter((order) => order.status === "Ongoing")}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <OrderCard order={item} />}
  />
);


const CompletedOrders = () => (
  <FlatList
    data={orders.filter((order) => order.status === "Completed")}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <OrderCard order={item} />}
  />
);


const OrdersScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "ongoing", title: "Ongoing" },
    { key: "completed", title: "Completed" },
  ]);

  const renderScene = SceneMap({
    ongoing: OngoingOrders,
    completed: CompletedOrders,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
            <TabBar style={styles.tabBar}
  {...props}
  indicatorStyle={{ backgroundColor: "green" }}
  renderTabBarItem={({ route }) => {
    const isFocused = props.navigationState.index === props.navigationState.routes.findIndex(r => r.key === route.key);
  
    return (
      <TouchableOpacity style={styles.tabButtons}>
        <Text style={{ color: isFocused ? "green" : "black", fontWeight: "bold" }}>
          {route.title}
        </Text>
      </TouchableOpacity>
    );
  }}
  />    
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingVertical: 8,
  },     
  tabButtons: {

   },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
  statusContainer: {
    backgroundColor: "#E0F2E9",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 5,
  },
  status: {
    color: "green",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  buttonTextOutline: {
    color: "green",
    fontWeight: "bold",
  },
  buttonSolid: {
    backgroundColor: "green",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  buttonTextSolid: {
    color: "white",
    fontWeight: "bold",
  },
});

export default OrdersScreen;
