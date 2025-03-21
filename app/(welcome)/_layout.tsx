import { Stack } from "expo-router";
import styled from "styled-components/native";

export default function WelcomeLayout() {
  return (
    <Container>
      {/* Stack for managing navigation */}
      <Stack
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen name="intro1" options={{ title: "" }} />
        <Stack.Screen name="intro2" options={{ title: "" }} />
        <Stack.Screen name="intro3" options={{ title: "" }} />
        <Stack.Screen name="intro4" options={{ title: "" }} />
      </Stack>
    </Container>
  );
}

// Styled components
const Container = styled.View`
  flex: 1;
  background-color: #eef9e6; // Add any background color or styles you want
`;