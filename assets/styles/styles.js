import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  letters: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
  },
  sectionData: {
    flex: 3,
  },
  textInput: {
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    fontSize: 20,
  },

  sectionPesAlturaLine: {
    flex: 2,
    flexDirection: 'row',
  },
  sectionInputDivider: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  sectionCalcula: {
    justifyContent: 'center',
    padding: 15,
    flex: 2,
  },
  buttonContent: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  errorText: {
    fontSize: 20,
  },
  sectionResult: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default styles;
