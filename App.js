import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from './src/store';
import { StyleSheet, View, Text } from 'react-native';
import { getUsersInit } from './src/store/actions';
import Test from './src/components/Test';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Test />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
