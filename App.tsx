/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import {HomeScreen} from './src/components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ArtistDetail} from './src/components/ArtistDetail/ArtistDetail';
import {SearchBarArtie} from './src/components/SearchBar';
import {BuddyList} from './src/data/Bands';
import {createStackNavigator} from '@react-navigation/stack';
import {Dummy} from './src/components/Dummy';
import {Hello} from './src/components/Hello';
import {ImageGallery} from './src/components/ArtistDetail/ImageGallery';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  searchBar: {
    width: window.width,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
    height: window.height,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    width: window.width,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Artist" component={ArtistDetail} />
        <Stack.Screen name="Dummy" component={Dummy} />
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="ImageGallery" component={ImageGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const App = () => {
  return MyStack();
};
