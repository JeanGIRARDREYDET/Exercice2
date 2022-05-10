import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerG}></View>
      <View style={styles.containerR}></View>
      <View style={styles.containerB}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: '#000',
   
  },  
  containerG: {
    flex: 3,
    backgroundColor: '#0A0',
 paddingLeft:0,
    
    flexBasis: "auto",
  
   
  },  containerR: {
    flex: 2,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    
    flexBasis: "auto", 
    
  },  containerB: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
   
      flexBasis: "auto",
     
  },
});
