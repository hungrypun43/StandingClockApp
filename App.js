import { StyleSheet, Text, View } from "react-native";
import { useCurrentTime } from "./usecases/time";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const { date, weekDay, hour, minute, colon } = useCurrentTime();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${weekDay}, ${date}`}</Text>
      <Text style={styles.time}>{`${hour}${colon}${minute}`}</Text>
    </View>
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
