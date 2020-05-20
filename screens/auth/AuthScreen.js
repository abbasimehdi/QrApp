import React from 'react';
import { Container, Tab, Tabs, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Login from './Login';
import SignUp from './SignUP';
import Colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const AuthScreen = props => {
    return (
        <Container>
            <LinearGradient colors={['#D3D3D3', '#D3D3D3', '#D3D3D3']} style={styles.linear}>
                <View style={styles.screen} >
                    <ScrollView>
                        <Tabs tabStyle={{ backgroundColor: Colors.primary }}>
                            <Tab heading="login"
                                tabStyle={{ backgroundColor: Colors.primary}}
                                activeTabStyle={{ backgroundColor: Colors.primary}}
                            >
                                <Login
                                    login={() => {
                                        props.navigation.navigate('Home')
                                    }}
                                />
                            </Tab>
                            <Tab heading="signup"
                                tabStyle={{ backgroundColor: Colors.primary }}
                                activeTabStyle={{ backgroundColor: Colors.primary }}
                            >
                                <SignUp />
                            </Tab>
                        </Tabs>
                    </ScrollView>
                </View>
            </LinearGradient>
        </Container >
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '80%',
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '10%',
        marginLeft: '10%',
        paddingTop: 3,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 10,
        borderTopWidth: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    linear: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        margin: '5%'
    }
});
export default AuthScreen;