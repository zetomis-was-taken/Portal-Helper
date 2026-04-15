import DashboardContent from "@/components/dashboard/DashboardContent";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardNote from "@/components/dashboard/DashboardNote";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView>
      <DashboardHeader />
      <DashboardContent />
      <DashboardNote />
    </SafeAreaView>
  );
};

export default Index;
