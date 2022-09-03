import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primera ventana</Text>
      <Text style={styles.title}>Login</Text>
      <input type="Text" placeholder="Usuario" style={styles.input_1} className='hp'></input>
      <input
        type="password"
        placeholder="Constraseña"
        style={styles.input_2}
      ></input>
      <button onClick={singIn} style={styles.boton}>
        Iniciar Sesión
      </button>
      <StatusBar style="auto" />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input_1: {
    width: "10%",
    height: "3%",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "10px",
    fontfamily: "Algerian",
  },
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      fontfamily: "Algerian",
    },
  
    input_1: {
      width: "10%",
      height: "3%",
      borderRadius: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      fontfamily: "Algerian",
    },
  
    input_2: {
      width: "10%",
      height: "3%",
      borderRadius: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      marginTop: "10px",
      fontfamily: "Algerian",
    },
  
    title: {
      fontSize: "30px",
      fontfamily: "Algerian",
      padding: "10px",
    },
  
    boton: {
      width: "10%",
      height: "5%",
      borderRadius: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      marginTop: "10px",
      fontfamily: "Algerian",
      cursor: "pointer",
    },
});
