import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import DATA_MANGA from '../../../Data_Mobile/Manga.json'

export default function GirdList({ data = DATA_MANGA, viewItem = styles.viewItem, numColumns = 2 }) {
  // console.log(Manga)
  const renderItem = (value) => {
    const {
      item: { title, image, rating, genre, view }
    } = value
    // console.log(value)

    const viewWidth = numColumns === 2 ? { width: "50%", } : { width: "33.3%" }

    return (
      <View style={[viewItem, viewWidth]} >
        <Image source={{ uri: image }} style={{ width: "100%", height: "90%", resizeMode: "cover", borderRadius: 10 }} ></Image>
        <Text>{title}</Text>
        {/* {rating ? <Text>{rating}</Text> : <></>} */}
        {/* {genre ? <Text>{genre}</Text> : <></>}
        {view ? <Text>{view}</Text> : <></>} */}
      </View>
    )

  }
  return (
    <View style={styles.viewFlatlist}>
      <FlatList
        style={styles.flatStyle}
        data={data}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}

      // horizontal={true}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  flatStyle: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",

  },
  viewFlatlist: {
    paddingHorizontal: "2%",
    flex: 0.98
  },
  viewItem: {
    height: 150,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    // backgroundColor: "blue"
  }



})