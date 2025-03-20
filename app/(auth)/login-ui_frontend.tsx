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
        <Input placeholder="example@gmail.com" placeholderTextColor="#4CAF50" />

        <Label>Password</Label>
        <Input
          secureTextEntry
          placeholder="************"
          placeholderTextColor="#A9A9A9"
        />

        <ForgotPassword>Forgot your Password ?</ForgotPassword>

        <LoginButton>
          <LoginText>Log-in</LoginText>
        </LoginButton>
        <SignUpContainer>
          <Text>Don’t have an account ? </Text>
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
  padding: 30px;
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
  font-size: 35px;
  font-weight: 600; /* Slightly thinner than bold */
  color: ${Colors.light.primary};
  margin-bottom: 20px;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  color: #2e8b57;
`;

const Input = styled.TextInput`
  width: 100%;
  border: 2px solid #4caf50;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  color: #000;
`;

const ForgotPassword = styled.Text`
  color: orange;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #4caf50;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const LoginText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SignUpText = styled.Text`
  color: orange;
  font-weight: bold;
`;
