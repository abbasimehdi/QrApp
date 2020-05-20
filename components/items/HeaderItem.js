import React from 'react';
import { Header, Icon, Text, View, Left, Right, Body, Title } from 'native-base';
import { StyleSheet } from 'react-native';
const HeaderItems = () => {
    return (
        <View>
                <Header style={styles.header}>
                    <Body>
                        <Title>Qr App</Title>
                    </Body>
                    <Right>
                        <Icon name='menu' style={styles.icn} />
                    </Right>
                </Header>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    },
    icn: {
        color: 'white'
    }
});
export default HeaderItems;