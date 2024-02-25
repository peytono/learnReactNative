import { View, Text, Button, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';

export default function Home(){
  
  return (
    <View>
      <Text style={{fontSize: 20}}>Here is the Home View</Text>
      <Button title='Do Something' onPress={() => Alert.alert('You did something!')}/>
      <StatusBar />
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
    </View>
  );
}