import { StyleSheet, StatusBar, View } from 'react-native';
import { AmbientesEquipamentos } from './src/telas/AmbientesEquipamentos';
import { RotasStack } from './src/rotas/RotasStack';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <RotasStack/>
    </View>
  );
}

// onde inicia o style do seu componente 
const styles = StyleSheet.create({
  //componente que você cria para armazenar o seu css
  container: {
    flex: 1, //ocupa todo o espaço disponível 
  },
});
