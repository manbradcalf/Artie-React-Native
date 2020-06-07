import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { BandImage, ImageGallery } from './ImageGallery';
import { Bio } from './Bio';

export type Artist = {
  name: string,
  city: string,
  genre: string,
  bio: string
  images: BandImage[]
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  header: {
    paddingBottom: 12,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  }
});

export const ArtistDetail: React.FC<Artist> = (artist) => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>{artist.name} | {artist.city} | {artist.genre}</Text>
      {ImageGallery(artist.images)}
      {Bio(artist.bio)}
    </View>
  )
}