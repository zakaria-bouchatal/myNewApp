import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export default function LoginScreen() {
  return (
    <Screen>
      {/* Background image only in the top 40% */}
      <BackgroundContainer>
        <Background
          source={require("../../assets/images/ebcbb960d5d992314b90ba13029e05b31.png")}
        />
      </BackgroundContainer>

      {/* Login form in the bottom 60% */}
      <Container>
        <Greeting>Welcome</Greeting>

        <Label>E-mail</Label>
        <EmailInput
          placeholder="example@gmail.com"
          placeholderTextColor="white"
        />

        <Label>Password</Label>
        <Input
          secureTextEntry
          placeholder="************"
          placeholderTextColor="white"
        />

        <ForgotPassword>Forgot your Password ?</ForgotPassword>

        <LoginButton>
          <LoginText>Log-in</LoginText>
        </LoginButton>

        <SignUpContainer>
          <Label>Don’t have an account ? </Label>
          <SignUpText>Sign-Up.</SignUpText>
        </SignUpContainer>
      </Container>
    </Screen>
  );
}

const Screen = styled.View`
  flex: 1;
`;

const BackgroundContainer = styled.View`
  height: 30%;
  width: 100%;
`;

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const Container = styled.View`
  background-color: ${Colors.light.background};
  padding: 8%; /* Adjusted to percentage for better responsiveness */
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  height: 75%;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 0;
  overflow: hidden;

  /* Adding shadow */
  shadow-color: black;
  shadow-offset: 0px -6px; /* Moves the shadow up */
  shadow-opacity: 0.5; /* Light shadow effect */
  shadow-radius: 6px;
  elevation: 6; /* Works for Android */
`;

const Greeting = styled.Text`
  font-family: "Poppins";
  font-size: 35px;
  font-weight: 600; /* Slightly thinner than bold */
  color: ${Colors.light.primary};
  margin-bottom: 5%; /* Adjusted to percentage */
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 2%; /* Adjusted to percentage */
  font-weight: 500px;
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

const ForgotPassword = styled.Text`
  color: #ff6600;
  align-self: flex-end;
  margin-bottom: 4%; /* Adjusted to percentage */
  font-size: 12px; /* Adjusted for better readability */
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #35750c;
  width: 100%;
  padding: 4%; /* Adjusted to percentage */
  border-radius: 10px;
  align-items: center;
  margin-top: 15%;
`;

const LoginText = styled.Text`
  font-family: "Poppins";
  color: white;
  font-weight: 100;
  font-size: 16px; /* Adjusted for better readability */
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
