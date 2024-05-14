import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Inicial } from "../telas/Inicial"
import { Usuarios } from "../telas/Usuarios"
import { AmbientesEquipamentos } from "../telas/AmbientesEquipamentos"
import { FontAwesome5 } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#6c757d',
            tabBarStyle: {
                backgroundColor: '#560bad',
                borderTopColor: 0,
                paddingBottom: 10,
                paddingTop: 10
            }
        }}>

            <Screen  
                name="inicial"
                component={Inicial}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    )
                }}
            />

            <Screen  
                name="usuarios"
                component={Usuarios}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="user" color={color} size={size} />
                    )
                }}
            />

            <Screen  
                name="ambiente"
                component={AmbientesEquipamentos}
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="arrow-up" color={color} size={size} />
                    )
                }}
            />

        </Navigator>
    )
}