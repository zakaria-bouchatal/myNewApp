import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// Styled components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #eef9e6;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #333;
`;

export default function Intro1() {
  return (
    <Container>
      <Title>Welcome to Intro1</Title>
    </Container>
  );
}