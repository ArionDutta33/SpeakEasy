import { Ionicons } from '@expo/vector-icons';
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
        <View className=" flex-row items-center justify-center border border-green-500">
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
        <View>
          <TextInput
            placeholder="Enter the text here"
            multiline
            className="h-24 border border-gray-300 p-2"
          />
        </View>
      </View>
    </>
  );
};

export default index;
{
}
