import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AuthScreen = props => {
    return (
        <ScrollView>
            <Form>
                <Item stackedLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item stackedLabel last>
                    <Label>email</Label>
                    <Input
                        keyboardType="email-address"
                    />
                </Item>
                <Item stackedLabel last>
                    <Label>phone</Label>
                    <Input
                        keyboardType="decimal-pad"
                    />
                </Item>
                <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input
                        keyboardType="decimal-pad"
                        secureTextEntry={true}
                    />
                </Item>
                <View style={styles.btn}>
                    <Button
                        rounded
                        block
                        danger
                    >
                        <Text> Sign Up </Text>
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