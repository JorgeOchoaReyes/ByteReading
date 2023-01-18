import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import type { Props } from "../types/navigation";
import Add from "../components/Add";
import BookCard from "../components/BookCard";
import { FlashList } from "@shopify/flash-list";

export const ReportsScreen = ({}: Props) => {
  return (
    <SafeAreaView className="h-full w-full bg-[#00000] px-4">
      <ScrollView className="h-full w-full bg-[#00000] px-4">
        <FlashList
          estimatedItemSize={50}
          data={[2, 4, 5, 6, 2]}
          ItemSeparatorComponent={() => <View className="my-2" />}
          renderItem={({ item }) => (
            <BookCard bookName={"TEST"} numberOfPages={item} />
          )}
        />
      </ScrollView>
      <Add />
    </SafeAreaView>
  );
};
