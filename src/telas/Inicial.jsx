//AQUI FICA A FUNÇÃO PARA GERAR O COMPONENTE (TELAS)

//importando os componentes, todos os componentes que usamos é preciso importál-os 
import { StyleSheet, View } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";

export function Inicial(){
    return(
        <View style={styles.container}> 
            <Cabecalho titulo="Localizador"/>
            
        </View>
    );
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' 
    },

});