import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';

export const Dummy: React.FC<String> = ({route}) => {
  const {origin} = route.params;
  return (
    <View>
      <Text>here is some dummy text</Text>
      <Text>I came from {origin}</Text>
    </View>
  );
};
