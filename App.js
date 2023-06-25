import { StyleSheet, Text, View } from "react-native";
import { useCurrentTime } from "./usecases/time";

import { QueryClient, QueryClientProvider } from "react-query";
import { useKeepAwake } from "expo-keep-awake";
import { StatusBar } from "expo-status-bar";

export default function App() {
  useKeepAwake();
  const { date, weekDay, hour, minute } = useCurrentTime();
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.date}>{`${weekDay}, ${date}`}</Text>
        <Text style={styles.time}>{`${hour}:${minute}`}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 200,

    color: "#FFF",
  },
  date: {
    fontSize: 25,
    color: "#FFF",
    marginBottom: -50,
  },
});
