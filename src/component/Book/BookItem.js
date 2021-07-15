import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default function BookListItem({book, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: book.image}} />
        <Text>{book.title}</Text>
        <Icon style={styles.icon} name="arrow-round-forward" />
      </View>
    </TouchableOpacity>
  );
}
