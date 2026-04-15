import { colors } from "@/theme/colors";
import { getDimensionTier } from "@/theme/dimension";
import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import HeaderCard from "./HeaderCard";

const DashboardHeader = () => {
  const { width } = useWindowDimensions();

  const isSmall = getDimensionTier(width) == "small";

  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <HeaderCard icon="bookmarks-outline" title="GPA" content="3.67" />
        <HeaderCard icon="book-outline" title="Môn đang học" content="4" />
        <HeaderCard icon="book-outline" title="IDK" content="3.67" />
        <HeaderCard icon="book-outline" title="IDK" content="3.67" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textPrimary,
    flex: 1,
    padding: 16,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});

export default DashboardHeader;
