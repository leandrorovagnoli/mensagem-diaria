import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerTintColor: '#FFF',
                        //headerBackTitleVisible: false,
                        cardStyle: {
                            backgroundColor: '#4b7e96'
                        },
                        headerStyle: {
                            backgroundColor: '#4b7e96',
                            
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
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Routes;