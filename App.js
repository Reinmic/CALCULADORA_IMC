import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './assets/styles/styles';
import Titol from './components/titol';
import Calculadora from './components/calculadora';

const App = () => {

  return (
    <View style={styles.all}>
      <StatusBar />
      <Titol />
      <Calculadora />
    </View>
  );
};

export default App;
