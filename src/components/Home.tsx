import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Artist} from './ArtistDetail/ArtistDetail';

const BuddyList: Artist = {
  city: 'Richmond',
  genre: 'Butt Gaze',
  name: 'Buddy List',
  bio:
    "Sweet hot shit from va baby! too bad they're all DEAD. WROTE some really good indie rock songs once",
  images: [
    {
      url: 'https://f4.bcbits.com/img/0009619513_21.jpg',
      desc: 'Test',
    },
    {
      url: 'https://f4.bcbits.com/img/a2150133292_16.jpg',
      desc: 'Test2',
    },
    {
      url:
        'https://media1.fdncms.com/styleweekly/imager/u/magnum/2296592/night09_young_scum.jpg',
      desc: 'Test3',
    },
    {
      url:
        'https://media2.fdncms.com/styleweekly/imager/u/mobilestory/9862492/art27_music_young_scum.jpg',
      desc: 'Actually Young Scum',
    },
    {
      url:
        'http://austintownhall.com/wp-content/uploads/2016/07/13528861_1157137574345824_381270789673127550_n.jpg',
      desc: 'w tay',
    },
    {
      url:
        'https://s3.amazonaws.com/ohmyrocknessdotcom/uploads/band/image/152608/fufuffff.jpg',
      desc: 'current',
    },
    {
      url:
        'https://www.madridpopfest.com/wp/wp-content/uploads/2018/12/take2-229x300.jpg',
      desc: 'spanish promo',
    },
    {
      url:
        'https://rvamag.com/wp-content/uploads/2018/06/FA19879A-ED17-46C7-95D4-D0875D94607C.jpg',
      desc: 'Another one',
    },
  ],
};

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // Navigate to Artist page, passing "artist" data defined above as
          // BuddyList
          navigation.navigate('Artist', {artist: BuddyList});
        }}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};
