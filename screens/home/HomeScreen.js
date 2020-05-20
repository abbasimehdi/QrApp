import React from 'react';
import HomeItem from '../../components/items/HomeItem';
import { Container, Header, Content, View, Text } from 'native-base';
import FooterItem from '../../components/layouts/footer/FooterItem';


const HomeScreen = props => {
    return (
        <View>
            <HomeItem
                QrScanner={() => {
                    props.navigation.navigate('QrScanner');
                }}
                QrGenerator={() => {
                    props.navigation.navigate('QrGenerator');
                }}
            />
            <FooterItem 
                Home={() => {
                    props.navigation.navigate('Home');
                }}
                QrScanner={() => {
                    props.navigation.navigate('QrScanner');
                }}
                QrGenerator={() => {
                    props.navigation.navigate('QrGenerator');
                }}
                Authenticate={() => {
                    props.navigation.navigate('Auth');
                }}
            />
        </View>
    );
};
export default HomeScreen;