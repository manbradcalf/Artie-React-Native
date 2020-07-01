import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BuddyList} from '../data/Bands';

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // Navigate to Artist page, passing "artist" data defined above as
          // BuddyList
          console.log('clicked on button on home page');
          navigation.navigate('Artist', {artist: BuddyList});
        }}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};
