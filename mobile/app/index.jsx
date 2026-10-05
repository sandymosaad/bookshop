import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Link href="/(auth)" style={styles.link}>login</Link>
      <Link href="/(auth)/signup" style={styles.link}>signup</Link>
      <Link href="/create" style={styles.link}>create </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 20,
    marginBottom: 20,
    color: "blue",
  },
});