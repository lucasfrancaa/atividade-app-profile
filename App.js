import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Image
        style={styles.headerImage}
        source={require('./assets/letreiro.jpg')}
      />
      <View style={styles.textContainer}>
          <Text style={styles.h1}>r e c i f e</Text>
          <Text>conheça os turísticos da capital pernambucana.</Text>
      <StatusBar style="auto" />
    </View>
    </View>
    <ScrollView>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/centro-historico.jpg')} />
          <Text style={styles.pictureText}>rua do bom jesus</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/paco-do-frevo.jpg')} />
          <Text style={styles.pictureText}>paço do frevo</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/praia-boa-viagem.jpg')} />
          <Text style={styles.pictureText}>praia de boa viagem</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/marco-zero.jpg')} />
          <Text style={styles.pictureText}>marco zero</Text>
        </View>
        <Button
        title="SAIBA MAIS"
        color="#000000"
        onPress={() => Alert.alert('https://www.google.com.br/')}
      />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 30,
    gap: 10,
  },
  headerImage: {
    width: 185,
    height: 150,
  },
  textContainer: {
    flexDirection: 'column',
    width: 150,
    gap: 5,
  },
  h1: {
    fontSize: 22,
  },
  pictureContainer: {
    marginBottom: 20,
  },
  picture: {
    width: 300,
    height: 300,
  },
  pictureText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
