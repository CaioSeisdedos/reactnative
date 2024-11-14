import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoPersonalizado = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BotaoPersonalizado;
