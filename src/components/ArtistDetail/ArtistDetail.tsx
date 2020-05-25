import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { BandImage, ImageGallery } from './ImageGallery';
import { forInStatement } from '@babel/types';

export type Artist = {
  name: string,
  city: string,
  genre: string,
  images: BandImage[]
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  }
});

export const ArtistDetail: React.FC<Artist> = (artist) => {
  return (
    <View style={styles.root}>

      <Text style={styles.greeting}>{artist.name}</Text>
      <Text style={styles.greeting}>{artist.city}</Text>
      <Text style={styles.greeting}>{artist.genre}</Text>
      {ImageGallery(artist.images)}
    </View>
  )
}