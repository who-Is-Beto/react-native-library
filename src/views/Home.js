import React from 'react';
import {FlatList, View} from 'react-native';
import BookListItem from '../component/Book/BookItem';

export default function Home({navigation}) {
  const handlePress = () => {
    navigation.navigate('Library');
  };
  const BookList = [
    {
      id: 1,
      title: 'Harry Potter',
      image: 'https://picsum.photos/200/100',
    },
    {
      id: 2,
      title: 'Hannibal',
      image: 'https://picsum.photos/200/75',
    },
  ];

  return (
    <View>
      <FlatList
        data={BookList}
        renderItem={({item}) => (
          <BookListItem book={item} onPress={handlePress} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
