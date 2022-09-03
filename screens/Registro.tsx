import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { StatusBar } from 'expo-status-bar';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <button onClick={Parqueadero} style={styles.boton1}>
        Parqueaderos
      </button>
      <StatusBar style="auto" />
      <button onClick={Conductor} style={styles.boton2}>
        Condctor
      </button>
      <StatusBar style="auto" />
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
  boton1: {
    width: "10%",
    height: "5%",
    border: "1px solid #ccc",
    padding: "10px",
    marginTop: "10px",
    fontfamily: "Algerian",
    cursor: "pointer",
  },
  boton2: {
    width: "10%",
    height: "5%",
    border: "1px solid #ccc",
    padding: "10px",
    marginTop: "10px",
    fontfamily: "Algerian",
    cursor: "pointer",
  },


});
