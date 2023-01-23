import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import type { Props } from "../types/navigation";
import Add from "../components/Add";
import ActivityCard from "../components/ActivityCard";
import moment from "moment-timezone";
import { FlashList } from "@shopify/flash-list";

export const HomeScreen = ({}: Props) => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      className="h-full w-full bg-[#00000] px-4"
    >
      <ScrollView className="mt-5 h-full w-full bg-[#00000]">
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
          className="mb-5"
        />
        <View className="h-full w-full">
          <FlashList
            estimatedItemSize={50}
            data={[2, 4, 5, 6, 2]}
            ItemSeparatorComponent={() => <View className="my-2" />}
            renderItem={({ item }) => (
              <ActivityCard
                date={moment().format("YYYY-MM-DD")}
                numberOfPages={item}
              />
            )}
          />
        </View>
      </ScrollView>
      <Add />
    </SafeAreaView>
  );
};
