import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore</ThemedText>
      <ThemedText>Discover new features and functionalities!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
