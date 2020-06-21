import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BandImage, ImageGallery} from './ImageGallery';
import {Bio} from './Bio';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type Artist = {
  name: string;
  city: string;
  genre: string;
  bio: string;
  images: BandImage[];
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    paddingBottom: 12,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});

export const ArtistDetail: React.FC<Artist> = ({route, navigation}) => {
  const {artist} = route.params;
  return (
    <View style={styles.root}>
      <Text style={styles.header}>
        {artist.name} | {artist.city} | {artist.genre}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dummy', {origin: 'Bio'});
        }}>
        {Bio(artist.bio)}
      </TouchableOpacity>
      {ImageGallery(artist.images)}
    </View>
  );
};
