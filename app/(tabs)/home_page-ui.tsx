import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FoodHomeScreen() {
  return (
    <View style={styles.container}>

        <View style={styles.topBarContainer}>
            <View style={styles.searchContainer}>
                <TextInput
                placeholder="Search"
                style={styles.searchInput}
                placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.filterBtn}>
                <Ionicons name="filter" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <View style={{flexDirection: 'column', justifyContent: 'space-between',  marginLeft: 20, marginRight: 20, height: 100}}>
                <View><Text>Good Morning</Text></View>
                <View><Text>Rise and shine! It's Souhour time</Text></View>
            </View>
            <View><Text>notifi</Text></View>
        </View>

        <View>
            <Text>
                Food Categories
            </Text>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFAFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 0,
  },
  topBarContainer: {
    backgroundColor: '#0083B3',
    padding: 8,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    height: 116,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    top: 40,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },

  filterBtn: {
    backgroundColor: '#F15A24',
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
});
