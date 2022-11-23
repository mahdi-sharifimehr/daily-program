import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Daily from "../screens/Daily";
import Currently from "../screens/Currently";
import Grouped from "../screens/Grouped";
import Locations from "../screens/Locations";
import colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

export default function Screens() {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Daily"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.CYAN
                    },
                    headerTintColor: 'white'
                }}
            >
                <Drawer.Screen name="Daily" component={Daily} />
                <Drawer.Screen name="Currently" component={Currently} />
                <Drawer.Screen name="Grouped" component={Grouped} />
                <Drawer.Screen name="Locations" component={Locations} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}