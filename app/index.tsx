import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';

import { data } from '~/data';

const Home = () => {
  const [fromLanguage, setFromLanguage] = useState<string>('English');
  const [toLanguage, setToLanguage] = useState<string>('English');
  const [fromTextInput, setFromTextInput] = useState<string>('');
  const [toTextInput, setToTextInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!fromTextInput || !toLanguage || !fromLanguage || !toLanguage) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${fromTextInput}&langpair=${fromLanguage}|${toLanguage}`
      );
      const data = await response.json();
      setLoading(false);
      console.log(JSON.stringify(data, null, 2));
      setToTextInput(data.matches[0].translation);
      console.log('hit');
      console.log(data.matches[0].translation);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }
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
      <ScrollView>
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
                  <Text className="font-bold text-black">{fromTextInput.length}</Text>/5,000
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
                  <Text className="font-bold text-black">{toTextInput.length}</Text>/5,000
                </Text>
                <View className="flex-row gap-3">
                  <Feather name="copy" size={22} color="gray" />
                  <AntDesign name="sound" size={22} color="gray" />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            className="mt-12  items-center justify-center rounded-full bg-indigo-500 p-4"
            onPress={handleSubmit}>
            <Text className="text-xl text-white">Translate</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
