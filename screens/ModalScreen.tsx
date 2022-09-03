import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <button onClick={Parqueadero} style={styles.boton}>
        Iniciar Sesión
      </button>
      <StatusBar style="auto" />
      <button onClick={Conductor} style={styles.boton}>
        Iniciar Sesión
      </button>
      <StatusBar style="auto" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const Parqueadero = () => {
  alert("Ingresando a socios parqueaderos");
};

const Conductor = () => {
  alert("Ingresando a la toma de datos del vehiculo");
};

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
  boton: {
    width: "10%",
    height: "5%",
    border: "1px solid #ccc",
    padding: "10px",
    marginTop: "10px",
    fontfamily: "Algerian",
    cursor: "pointer",
  },
});
