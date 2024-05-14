import {View,Text, StyleSheet, FlatList} from "react-native"
import { AmbienteEquipamento } from "./AmbienteEquipamento"

interface AmbienteEquipamentoProps{
    codigo: string;
    descricao: string;
    statusOperacional: string;
    instrucoesSeguranca: string;
    contatoResponsavel: string;
    latitude: string;
    longitude: string;
}

interface ListaAmbienteEquipamentoProps {
    colecao: AmbienteEquipamentoProps[];
    remover: (codigo: string) => void;
}


export const ListaAmbienteEquipamento = ({colecao, remover}: ListaAmbienteEquipamentoProps) =>{

    return(
        <View style={styles.conteiner}>
            <FlatList
                data = {colecao}
                keyExtractor={item => item.codigo}
                renderItem={({item}) => (
                    <AmbienteEquipamento
                        descricao = {item.descricao}
                        latitude = {item.latitude}
                        longitude = {item.longitude}
                        statusOperacional = {item.statusOperacional}
                        instrucoesSeguranca = {item.instrucoesSeguranca}
                        contatoResponsavel = {item.contatoResponsavel}
                        excluir ={() => remover(item.codigo)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.texto}>
                        Nenhum ambiente e equipamento armazenado
                    </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    texto: {
        color: '#000',
        paddingTop: 24,
        textAlign:'center'
    },

});