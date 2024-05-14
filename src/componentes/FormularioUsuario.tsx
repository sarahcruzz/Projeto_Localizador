import { useState } from "react";
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native"


interface FormularioUsuarioProps {
    adicionar: (nome: string,
                 email: string,
                 telefone: string,
                 usuario: string,
                 senha: string) => void
}


//passando a propse como parametro
export function FormularioUsuario({adicionar}: FormularioUsuarioProps){
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    
    //onChange = executado a cada interação ou alteração dentro do input 
    //value = é a informação apresentada dentro do input, então qualaquer alteração feita no state é mostrada no input 
    //tudo que se altera no input altera o state e alterações no state afetão o input, isto é o componente controlado 
    //que está vinculado entre o state e oq há na tela

   

    return(
        <View style={styles.container}>

            <View style={styles.containerCampo}>
                <TextInput
                style={styles.campo}
                placeholder="Name"
                placeholderTextColor='#000'
                keyboardType="default"
                onChangeText={setNome}
                value={nome}
                />

                <TextInput
                style={styles.campo}
                placeholder="Email"
                placeholderTextColor='#000'
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                />

                <TextInput
                style={styles.campo}
                placeholder="Phone Number"
                placeholderTextColor='#000'
                keyboardType="phone-pad"
                onChangeText={setTelefone}
                value={telefone}
                />

                <TextInput 
                    style={styles.campo}
                    placeholder='User'
                    placeholderTextColor='#000'
                    keyboardType='default'                
                    onChangeText={setUsuario}
                    value={usuario}
                /> 

                <TextInput 
                    style={styles.campo}
                    placeholder='Password'
                    placeholderTextColor='#000'                
                    onChangeText={setSenha}
                    value={senha}
                />     


            </View>
           
            <TouchableOpacity 
                style={styles.botao}
                onPress={ () => adicionar(nome, email, telefone, usuario, senha)}
            >
                <Text style={styles.texto}>+</Text>
            </TouchableOpacity>
            
        </View>
    )
}

//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical:10,
        marginVertical:10,
    },
    containerCampo:{
        flex: 1
    },
    campo: {
        height: 50,
        backgroundColor: '#fff',
        color: '#000',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5, 
        fontSize: 16
    },
    botao: {
        width: 60,
        height: 290,
        marginStart: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#560bad',
        marginLeft: 10,
        borderRadius: 5, 
        marginVertical: 5
    }, 
    texto: {
        color: '#FFFF',
        fontSize: 25
    }

});