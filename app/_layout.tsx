import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

interface TabConfig {
  name: string;
  title: string;
  activeIcon: IconName;
  inactiveIcon: IconName;
}

const TAB_SCREENS: TabConfig[] = [
  {
    name: "index",
    title: "Dashboard",
    activeIcon: "analytics",
    inactiveIcon: "analytics-outline",
  },
  {
    name: "(calculator)/calculator",
    title: "Calculator",
    activeIcon: "calculator",
    inactiveIcon: "calculator-outline",
  },
  {
    name: "(scheduler)/scheduler",
    title: "Scheduler",
    activeIcon: "calendar",
    inactiveIcon: "calendar-outline",
  },
  {
    name: "(settings)/settings",
    title: "Settings",
    activeIcon: "settings",
    inactiveIcon: "settings-outline",
  },
];

export const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          paddingTop: 6,
          paddingBottom: 6,
          height: "auto",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
      }}
    >
      {TAB_SCREENS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? tab.activeIcon : tab.inactiveIcon}
                size={24}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default RootLayout;
