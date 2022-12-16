import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MainStack from './mainStack';

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default Navigation;
