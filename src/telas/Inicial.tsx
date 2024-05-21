//AQUI FICA A FUNÇÃO PARA GERAR O COMPONENTE (TELAS)

//importando os componentes, todos os componentes que usamos é preciso importál-os 
import { StyleSheet, View, ImageBackground} from "react-native";
import MapView from "react-native-maps";
import { Cabecalho } from "../componentes/Cabecalho";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import { useEffect, useState } from "react";

export function Inicial(){

    const [location, setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermissions(){
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition =  await getCurrentPositionAsync();
            setLocation(currentPosition);

            console.log("LOCALIZAÇÃO ATUAL => ", currentPosition);
        }

    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    return(     

        <View style={styles.container}> 
            <Cabecalho titulo="Localizador"/>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005, 
                    longitudeDelta: 0.005
                }}
            />

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
    fundo: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        resizeMode: 'cover'
    },
    map: {
        flex: 1,
        width: '100%',
    }

});