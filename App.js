import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import BotaoPersonalizado from './components/BotaoPersonalizado';
import ClimaInfo from './components/ClimaInfo';

export default function App() {
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const buscarClima = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&units=metric&appid=996d66badf7eba1e26a480b33ae125cc`
      );
      const dados = await resposta.json();
  
      if (dados.cod === 200) { // Verifica se a resposta é bem-sucedida
        setClima({
          cidade: dados.name,
          temperatura: dados.main.temp,
          descricao: dados.weather[0].description,
        });
      } else {
        console.error("Erro: ", dados.message);
        alert(`Erro ao buscar clima: ${dados.message}`);
      }
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
      alert("Erro ao buscar clima. Verifique sua conexão ou tente novamente.");
    }
    setCarregando(false);
  };
  

  useEffect(() => {
    buscarClima();
  }, []);

  return (
    <View style={styles.container}>
      {carregando ? (
        <ActivityIndicator size="large" color="#1e90ff" />
      ) : clima ? (
        <ClimaInfo
          cidade={clima.cidade}
          temperatura={clima.temperatura}
          descricao={clima.descricao}
        />
      ) : null}
      <BotaoPersonalizado titulo="Atualizar Clima" onPress={buscarClima} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
