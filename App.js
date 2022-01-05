import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import NumberProcess from './components/NumberProcess';
import ListProcess from './components/ListProcess';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store} /* provideri yaziyoruz tek bir var i var store onu da bizim olusturdugumuz storedan cekiyoruz*/ >  
      <View style={styles.container}>
        <ListProcess />
        <NumberProcess />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
