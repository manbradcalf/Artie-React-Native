import React from 'react'
import { Dimensions, StyleSheet, Image, FlatList } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create(
    {
        imageItem: {
            width: (windowWidth / 3)-20,
            height: (windowWidth / 3)-20,
            margin: 4
        }
    }
)

export type BandImage = {
    url: string,
    desc: string
}

// The Image Gallery in the form of a flatlist
export const ImageGallery: React.FC<BandImage[]> = (uris) => {
    return (
        <FlatList
            numColumns={3}
            data={uris}
            renderItem={(bandImage) => {
                return (
                    <Image
                        source={{ uri: bandImage.item.url }}
                        style={styles.imageItem}
                    />
                )
            }}
        />
    )
}

export default { ImageGallery }
