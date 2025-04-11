import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions, 
  Animated 
} from 'react-native';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Welcome1 from '../../assets/images/Chef Cooking.svg';
import Welcome2 from '../../assets/images/Customers Enjoy Food.svg';
import Welcome3 from '../../assets/images/Driver Arrives at Restaurant.svg';

import TopBarImage from '../../assets/images/Rectangle 22.svg';
import WavyHeader from '../../components/ui/WeavyHeader';

const { width } = Dimensions.get('window');



const slides = [
  { id: '1', Image: Welcome1, text: 'Find discounts and offers' },
  { id: '2', Image: Welcome2, text: 'Good food deals and quality' },
  { id: '3', Image: Welcome3, text: 'Easy to go food' },
];


const WelcomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else {
        clearInterval(interval);
        router.replace('/(auth)/login');
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [currentSlide]);

  const CurrentImage = slides[currentSlide].Image;

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <WavyHeader />
        <Text style={styles.textInside}>Welcome to Foodo</Text>
      </View>

      <Animated.View style={{ opacity: fadeAnim }}>
      
        <View style={styles.CurrentImage}>
          <CurrentImage />
        </View>
      </Animated.View>

      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        {slides[currentSlide].text}
      </Animated.Text>
      
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFAFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textInside: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  CurrentImage: {
    height: 0.8 * width,
    width: 0.8 * width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
