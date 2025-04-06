import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useRouter } from "expo-router";

export default function Intro1() {
  const router = useRouter();

  return (

    <View>

      <View>
        <Image
          source={require('../../assets/images/Rectangle 22.png')}
          style={styles.image}
        />
      </View>
      <Button
          title="Next"
          onPress={() => router.replace("/(auth)/login")}
      />

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
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});

