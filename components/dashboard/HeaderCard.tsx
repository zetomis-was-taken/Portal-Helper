import { colors } from "@/theme/colors";
import { getDimensionTier } from "@/theme/dimension";
import { globalStyles } from "@/theme/globalStyles";
import { typography } from "@/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

export interface HeaderCardProps {
  title: string;
  content: string;
  icon: IconName;
}

const HeaderCard = ({ title, content, icon }: HeaderCardProps) => {
  const { width } = useWindowDimensions();

  const isSmall = getDimensionTier(width) == "small";

  return (
    <View
      style={[
        globalStyles.card,
        {
          width: isSmall ? "48%" : "23%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Ionicons name={icon} size={20} color={colors.textPrimary} />
      <Text
        style={[
          typography.bodySmall,
          { letterSpacing: 2, fontWeight: "bold", color: colors.textSecondary },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          typography.bodyMedium,
          {
            letterSpacing: 1,
            fontWeight: "bold",
            color: colors.textPrimary,
          },
        ]}
      >
        {content}
      </Text>
    </View>
  );
};

export default HeaderCard;
