import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <Screen>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <Container>
            <Label>Name</Label>
            <NameInput placeholder="Enter your name" placeholderTextColor="white" />
            
            <Label>Last Name</Label> 
            <Input placeholder="Enter your last name" placeholderTextColor="white" />

            <Label>Email</Label> 
            <Input placeholder="Enter your email" placeholderTextColor="white" keyboardType="email-address" />

            <Label>Phone Number</Label> 
            <Input placeholder="Enter your phone number" placeholderTextColor="white" keyboardType="phone-pad" />
            
            <Label>Password</Label>
            <Input secureTextEntry={true} placeholder="************" placeholderTextColor="white" />

               <LittleContainer>
              <LittleText>By continuing, you agree to </LittleText>
             <TermsOfUse>Terms of Use</TermsOfUse>
                  <LittleText> and </LittleText>
               <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
              <LittleText>.</LittleText>
               </LittleContainer>

            <SignupButton onPress={() => router.replace("/(tabs)")}>
              <SignupText>Sign Up</SignupText>
            </SignupButton>

            <SignUpContainer>
              <Label>Already have an account?</Label>
              <SignUpText onPress={() => router.push("/(auth)/login")}>Login.</SignUpText>
            </SignUpContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const Screen = styled.View`
  flex: 1;
  background-color: ${Colors.light.background};
`;

const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 10%;
  padding-top: 11%;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 2%;
  font-size: 11px;
  color: white;
`;

const NameInput = styled.TextInput`
  width: 100%;
  border: 2px solid white;
  padding: 5%;
  border-radius: 10px;
  border-color: #24c245;
  margin-bottom: 4%;
  background-color: #214609;
  color: white;
`;

const Input = styled.TextInput`
  width: 100%;
  border: 2px solid white;
  padding: 5%;
  border-radius: 10px;
  border-color: white;
  margin-bottom: 4%;
  background-color: ${Colors.light.background};
  color: white;
`;

const SignUpContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const SignUpText = styled.Text`
  color: #ff6600;
  font-weight: 300;
  margin-left: 5px;
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
  color: white;
  font-weight: 100;
  font-size: 16px;
`;

const LittleContainer = styled.View`
  margin-top: 5%;
  align-items: center;
  text-align: center;
  padding: 2%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LittleText = styled.Text`
  color: white; 
  font-size: 12px;
`;

const TermsOfUse = styled.Text`
  color: red;
  font-weight: bold;
  text-decoration: underline;
  font-size: 12px;
`;

const PrivacyPolicy = styled.Text`
  color: red;
  font-weight: bold;
  text-decoration: underline;
  font-size: 12px;
`;
