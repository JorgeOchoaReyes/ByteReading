import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { HomeScreen } from "./screens/home";
import { ReportsScreen } from "./screens/reports";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { tabBarIconType } from "./types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <TRPCProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Tab.Navigator
              screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: "rgb(31 41 55)",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            >
              <Tab.Screen
                options={({}) => ({
                  tabBarIcon: ({ focused, color, size }: tabBarIconType) => {
                    return (
                      <Ionicons
                        name={"analytics"}
                        size={size}
                        color={focused ? "black" : color}
                      />
                    );
                  },
                })}
                name="Plan"
                component={HomeScreen}
              />
              <Tab.Screen
                options={({}) => ({
                  tabBarIcon: ({ focused, color, size }: tabBarIconType) => {
                    return (
                      <Ionicons
                        name={"library"}
                        size={size}
                        color={focused ? "black" : color}
                      />
                    );
                  },
                })}
                name="Books"
                component={ReportsScreen}
              />
            </Tab.Navigator>
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </TRPCProvider>
  );
};
