import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';

const Titol = () => {
  const colors = ['red', 'green', 'blue'];
  const lletres = ['I', 'M', 'C'];
  return (
    <View style={styles.sectionTitle}>
      <View >
        <Text style={styles.title}>Calculadora</Text>
      </View>
      <View style={styles.letterSection}>
        {lletres.map((lletra, index) => (
          <Text key={index} style={{ ...styles.letters, color: colors[index] }}>
            {lletra}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default Titol;