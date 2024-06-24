import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Главная
            </Text>
        </View>
    )
}

function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Топики
            </Text>
        </View>
    )
}

function Settings() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Настройки
            </Text>
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Main">
                <Tab.Screen name="Main" component={Main} />
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}