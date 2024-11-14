import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClimaInfo = ({ cidade, temperatura, descricao }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura}°C</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  cidade: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 48,
    color: '#1e90ff',
  },
  descricao: {
    fontSize: 18,
    color: '#555',
  },
});

export default ClimaInfo;
