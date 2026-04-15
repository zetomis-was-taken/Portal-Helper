import { colors } from "@/theme/colors";
import { getDimensionTier } from "@/theme/dimension";
import { globalStyles } from "@/theme/globalStyles";
import { typography } from "@/theme/typography";
import React, { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";

const DashboardContent = () => {
  const { width } = useWindowDimensions();
  const [currentDate, setCurrentDate] = useState(new Date());

  const isSmall = getDimensionTier(width) == "small";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View
      style={[
        globalStyles.card,
        {
          borderColor: colors.textPrimary,
          borderWidth: 2,
          marginHorizontal: isSmall ? 32 : 64,
          flexDirection: "column",
          columnGap: 4,
        },
      ]}
    >
      <View
        style={[
          {
            flexDirection: "column",
            columnGap: 2,
          },
        ]}
      >
        <Text style={[typography.bodyLarge, { fontWeight: "semibold" }]}>
          {currentDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        <Text
          style={[typography.textTertiary, { color: colors.textSecondary }]}
        >
          {currentDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "2-digit",
            day: "2-digit",
          })}
        </Text>
      </View>
    </View>
  );
};

export default DashboardContent;
