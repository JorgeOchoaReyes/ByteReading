import moment from "moment-timezone";
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ActivityCard: React.FC<{ date: string; numberOfPages: number }> = ({
  date,
  numberOfPages,
}) => {
  const [day, setDay] = useState<moment.Moment>(moment(date));
  return (
    <TouchableOpacity className="my-1 flex-row justify-between rounded-lg bg-gray-800 px-6 py-3 shadow-xl ring-1 ring-slate-900/5 active:bg-gray-900 dark:bg-slate-800">
      <View className="flex-col content-center items-center justify-center rounded-full bg-gray-600 p-4 text-center">
        <Text className="text-white"> {day.format("MMM")} </Text>
        <Text className="text-white"> {day.format("DD")} </Text>
      </View>
      <View className="flex-col content-center items-center justify-center text-center">
        {numberOfPages > 5 ? (
          <AntDesign name="checkcircle" size={40} color="green" />
        ) : (
          <Entypo name="circle" size={40} color="green" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ActivityCard;
