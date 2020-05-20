import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Form, Item, Input, Label, Button, Text, View } from 'native-base';

const Input = props => {
    const textChangeHandler = text => {

    }
    return (
        <Item floatingLabel stackedLabel last>
            <Label>{ props.title }</Label>
            <Input
                { ...props }
                value={formState.s.inputValues.title}
                onChangeText={textChangeHandler}
                
            />
        </Item>
    );
};

const styles = StyleSheet.create({
 
});
export default Input;