import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Dummy: React.FC<String> = (origin) => {
  return <Text>You came from {origin}</Text>;
};
