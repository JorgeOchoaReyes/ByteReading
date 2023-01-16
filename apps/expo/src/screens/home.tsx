import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import type { Props } from "../types/navigation";
import Add from "../components/Add";

export const HomeScreen = ({}: Props) => {
  return (
    <SafeAreaView className="h-full w-full bg-[#00000] p-4">
      <Text className="mx-auto pb-2 text-2xl font-bold text-black">
        Byte Learning
      </Text>
      <View className="flex flex-col border-t-2 border-gray-500 p-4"></View>
      <Calendar
        markingType={"period"}
        markedDates={{
          "2023-01-15": { marked: true, dotColor: "#50cebb" },
          "2023-01-16": { marked: true, dotColor: "#50cebb" },
          "2023-01-21": {
            startingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
          "2023-01-22": { color: "#70d7c7", textColor: "white" },
          "2023-01-23": {
            color: "#70d7c7",
            textColor: "white",
            marked: true,
            dotColor: "white",
          },
          "2023-01-24": { color: "#70d7c7", textColor: "white" },
          "2023-01-25": {
            endingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
        }}
      />
      <Add />
    </SafeAreaView>
  );
};
