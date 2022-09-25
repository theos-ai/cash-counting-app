import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Button({ title, onPress, icon, color, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled}>
      <Ionicons name={icon} size={28} color={disabled? '#7F7F7F':color? color:'#f1f1f1'} />
      <Text style={disabled? styles.disabledText:styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f1f1f1',
    marginLeft: 10,
  },
  disabledText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#7F7F7F',
    marginLeft: 10,
  }
});