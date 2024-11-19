import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';

import { data } from '~/data';

const Home = () => {
  const [fromLanguage, setFromLanguage] = useState<string>('English');
  const [toLanguage, setToLanguage] = useState<string>('English');
  const [fromTextInput, setFromTextInput] = useState<string>('');
  const [toTextInput, setToTextInput] = useState<string>('');

  const handleSubmit = () => {
    console.log(fromLanguage, toLanguage, fromTextInput);
  };

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
          <SelectCountry
            style={{
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              width: 150,
              justifyContent: 'center',
              borderRadius: 40,
              padding: 12,
            }}
            search
            maxHeight={200}
            value={fromLanguage}
            data={data}
            valueField="code"
            labelField="language"
            flagField="flag"
            placeholder="From"
            searchPlaceholder="Search..."
            onChange={(e) => {
              console.log(e.code);
              setFromLanguage(e.code);
            }}
          />
          <Ionicons
            className="mx-4 rounded-full border bg-black p-2"
            name="swap-horizontal"
            size={24}
            color="white"
          />
          <SelectCountry
            style={{
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              width: 150,
              justifyContent: 'center',
              borderRadius: 40,
              padding: 12,
            }}
            search
            maxHeight={200}
            value={toLanguage}
            data={data}
            valueField="code"
            labelField="language"
            flagField="flag"
            placeholder="To"
            searchPlaceholder="Search..."
            onChange={(e) => {
              setToLanguage(e.code);
            }}
          />
        </View>
        {/* from text box */}
        <View className="mt-4 h-72 justify-between rounded-3xl border border-gray-300  p-4">
          <TextInput
            value={fromTextInput}
            onChangeText={setFromTextInput}
            placeholder="Enter the text here"
            multiline
            className="flex-1 "
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
        <View className="mt-4 h-72 justify-between rounded-3xl border border-gray-300  p-4">
          <TextInput
            value={toTextInput}
            onChangeText={setToTextInput}
            placeholder="Enter the text here"
            multiline
            className="flex-1"
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
        <Pressable onPress={handleSubmit}>
          <Text>Translate</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Home;
// className = 'h-48 rounded-3xl border border-gray-300  p-4';
// style={{
//             backgroundColor: 'white',
//             borderColor: 'gray',
//             borderWidth: 1,
//             flexDirection: 'row',
//             alignItems: 'center',
//             width: 150,
//             justifyContent: 'center',
//             borderRadius: 40,
//             padding: 12,
//           }}
