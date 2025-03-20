import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors"; // Fixed import

export default function SignupScreen() {
  const router = useRouter();

  return (
    <Screen>
      <Container>
        <Label>E-mail</Label>
        <EmailInput placeholder="example@gmail.com" placeholderTextColor="white" />
        <Label>Password</Label>
        <Input secureTextEntry placeholder="************" placeholderTextColor="white" />

        <SignupButton onPress={() => router.replace("/(tabs)")}>
          <SignupText>Create Account</SignupText>
        </SignupButton>

        <SignUpContainer>
          <Label>Already have an account?</Label>
          <SignUpText onPress={() => router.push("/(auth)/login")}>Login.</SignUpText>
        </SignUpContainer>
      </Container>
    </Screen>
  );
}

const Screen = styled.View`
  flex: 1;
`;


const Container = styled.View`
  background-color: ${Colors.light.background}; 
  height: 100%;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: ;
  overflow: hidden;
`;


const Label = styled.Text`
 font-family: "Poppins";
  align-self: flex-start;
  margin-bottom: 2%; /* Adjusted to percentage */
  font-weight: 400px;
  color: white;
`;

// Custom styled component for the email input
const EmailInput = styled.TextInput`
  width: 100%;
  border: 2px solid white;
  padding: 5%; /* Adjusted to percentage */
  border-radius: 10px;
  border-color: #24c245;
  margin-bottom: 4%; /* Adjusted to percentage */
  background-color: #214609; /* Custom background color for email input */
  color: white; /* Text color */
`;

// Default styled component for other inputs
const Input = styled.TextInput`
  width: 100%;
  border: 2px solid white;
  padding: 5%; /* Adjusted to percentage */
  border-radius: 10px;
  border-color: white;
  margin-bottom: 4%; /* Adjusted to percentage */
  background-color: ${Colors.light.background}; /* Default background color */
  color: white; /* Text color */
`;




const SignUpContainer = styled.View`
  width: 100%; /* Ensure it takes full width */
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  margin-top: 20%; /* Push the container to the bottom */
  padding-bottom: 5%; /* Add padding at the bottom to prevent overlap */
`;

const SignUpText = styled.Text`
  color: #ff6600;
  font-weight: 300px;
  margin-left: 5px; /* Add a small margin between the text */
  margin-bottom: 2%;
`;
const SignupButton = styled.TouchableOpacity`
  background-color: #35750c;
  width: 100%;
  padding: 4%;
  border-radius: 10px;
  align-items: center;
  margin-top: 15%;
`;

const SignupText = styled.Text`
  font-family: "Poppins";
  color: white;
  font-weight: 100;
  font-size: 16px;
`;
