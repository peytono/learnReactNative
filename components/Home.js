import { View, Text, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function Home(){
  
  return (
    <View>
      <Text>Here is the Home View</Text>
      <Button title='Do Something' onPress={() => Alert.alert('You did something!')}/>
    </View>
  );
}