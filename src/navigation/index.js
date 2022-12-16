import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MainStack from './mainStack';
import BottomTabs from './bottomTabs';

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <MainStack /> */}
            <BottomTabs />
        </NavigationContainer>
    );
};

export default Navigation;
