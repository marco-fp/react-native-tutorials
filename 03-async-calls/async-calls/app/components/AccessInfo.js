import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Contador.js';

const AccessInfo = ({status}) => (
  <View>
    <Text style={styles.contador}>{status}</Text>
  </View>
)

export default AccessInfo;
