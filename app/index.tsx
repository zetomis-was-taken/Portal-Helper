import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Ionicons
        name={true ? "analytics" : "analytics-outline"}
        size={24}
        color={colors.primary}
      />
    </View>
  );
}
