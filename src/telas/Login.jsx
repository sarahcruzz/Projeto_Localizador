import { useState } from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useNavigation} from '@react-navigation/native'

export function Login(){

    //useState = armazrena os dados inseridos nos inputs
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()

    // função
    function abrirInicial(){
        navigation.navigate('rotasTab')
    }

    return(
        <View style={styles.container}>
           
            <TextInput
                style={styles.campo}
                placeholder='Usuário' 
                placeholderTextColor='#560bad'
                onChangeText={setUsuario}
                value={usuario}
            />

            <TextInput
                style={styles.campo}
                placeholder='Senha'
                placeholderTextColor='#560bad'
                keyboardType='default'
                onChangeText={setSenha}
                value={senha}     
            />
    
            <TouchableOpacity style={styles.botao} onPress={abrirInicial}>
                <Text style={styles.textoBtn}>Entrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cadastro} >
                <Text style={styles.textoCadastro}>Cadastre-se</Text>
            </TouchableOpacity>  
            
        </View>
        
    )
}

//Estilização
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center'
    },

    campo: {
        width: 350,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#dfdfdf',
        backgroundColor: '#fff',
        color: '#560bad',
        marginVertical: 7,
        padding: 10,
        borderRadius: 5, 
        fontSize: 16
    },
    containerBtn: {
        justifyContent:'center',

    },
    botao: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#560bad',
        borderRadius: 5,
        padding: 7, 

    }, 
    textoBtn: {
        color: '#fff',
        fontSize: 15
    },
    cadastro: {
        width: 345,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 5
    },
    textoCadastro:{
        color: '#560bad',
        fontSize: 15,
    }
    

});