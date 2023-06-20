import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useCurrentTime } from "./usecases/time";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const { date, weekDay, hour, minute, colon } = useCurrentTime();
  return (
    <View style={styles.container}>
      <Text>{`${weekDay} ${date}`}</Text>
      <Text style={styles.time}>{`${hour}:${minute}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 150,
  },
});
