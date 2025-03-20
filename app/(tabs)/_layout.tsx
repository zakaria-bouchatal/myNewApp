import { Tabs } from "expo-router";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OrdersScreen from "./order_page-ui";


const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: styles.tabBar,
            }}
          >
            <Tab.Screen
              name="Home"
              component={OrdersScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Orders"
              component={OrdersScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="receipt-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={OrdersScreen}
              options={{
                //tabBarButton: (props) => <CustomTabButton {...props} />,
                tabBarIcon: ({ size }) => (
                  <Ionicons name="search" size={size} color="white" />
                ),
              }}
            />
            <Tab.Screen
              name="Cart"
              component={OrdersScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={OrdersScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />
         </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 70,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
  },
  customButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});

