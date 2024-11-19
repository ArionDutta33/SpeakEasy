import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
          title: 'Translate',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      {/* main */}
      <View className="flex-1 border-yellow-600 bg-white px-4">
        {/* outer */}
        <View className=" flex-row items-center justify-center    ">
          <View className="flex-1 flex-row items-center  justify-center gap-4 rounded-full border border-gray-300 px-6  py-2 ">
            <Text className="text-3xl">🇬🇧</Text>
            <Text className="text-lg font-bold">UK</Text>
          </View>
          <Ionicons
            className="mx-4 rounded-full border bg-black p-2"
            name="swap-horizontal"
            size={24}
            color="white"
          />
          <View className="flex-1 flex-row items-center  justify-center gap-4 rounded-full border border-gray-300 px-6  py-2 ">
            <Text className="text-3xl">🇬🇧</Text>
            <Text className="text-lg font-bold">UK</Text>
          </View>
        </View>
        {/* from text box */}
        <View className="mt-4 h-72 justify-between rounded-3xl border border-gray-300  p-4">
          <TextInput
            placeholder="Enter the text here"
            multiline
            textAlignVertical="top"
            numberOfLines={5}
          />
          <View className="gap-4  ">
            <View className="border border-gray-300" />
            <View className="flex-row justify-between   px-2">
              <Text>
                <Text className="font-bold text-black">150</Text>/5,000
              </Text>
              <View className="flex-row gap-3">
                <Feather name="copy" size={22} color="gray" />
                <AntDesign name="sound" size={22} color="gray" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default index;
// className = 'h-48 rounded-3xl border border-gray-300  p-4';
