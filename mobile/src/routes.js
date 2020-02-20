import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Settings from './pages/Settings';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                mode="modal"
                screenOptions={
                    {
                        headerTintColor: '#FFF',
                        cardStyle: {
                            backgroundColor: '#273A4B'
                        },
                        headerStyle: {
                            backgroundColor: '#273A4B',

                        }
                    }
                }>
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{
                        headerShown: false,

                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: true,
                        title: "Configurações",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontFamily: "CarterOne-Regular",
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Routes;