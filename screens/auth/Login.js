import React from 'react';
import { Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/colors';

const AuthScreen = props => {
    return (
        <ScrollView>
            <Form>
                <Item floatingLabel stackedLabel>
                    <Label>Username</Label>
                    <Input
                    keyboardType="default"
                    onChangeText={() => {
                        
                    }}
                    />
                </Item>
                <Item floatingLabel stackedLabel last>
                    <Label>Password</Label>
                    <Input
                    keyboardType="decimal-pad"
                    secureTextEntry={true}
                    onChangeText={() => {

                    }}
                    />
                </Item>
                <View style={styles.btn}>
                    <Button
                        rounded
                        block
                        style={{ backgroundColor: Colors.primary}}
                        onPress={props.login}
                    >
                        <Text> login </Text>
                    </Button>
                </View>
            </Form>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    btn: {
        margin: '5%'
    }
});
export default AuthScreen;