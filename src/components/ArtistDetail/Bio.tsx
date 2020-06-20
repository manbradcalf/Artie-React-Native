import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});

export const Bio: React.FC<string> = (bioText) => {
  return (
    <View style={styles.root}>
      <Text style={styles.headerText}>Biography</Text>
      <Text style={styles.infoText}>{bioText}</Text>
    </View>
  );
};
