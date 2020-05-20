import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, AppRegistry, Button } from 'react-native';
import QRCode from 'react-native-qrcode';
import FooterItem from '../../components/layouts/footer/FooterItem';
import LinearGradient from 'react-native-linear-gradient';

class QrCodeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      Text_Input: "",
      Text_Output: ""
    }
  }

  getTextInputValue = () => {
    this.setState({ Text_Output: this.state.Text_Input })
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          {/* <HeaderItem /> */}
          {/* <LinearGradient colors={['#D3D3D3', '#D3D3D3', '#D3D3D3']} style={{ height: '100%' }}> */}
          {/* <View style={styles.container}> */}
          <View>
            <Text style={styles.textTitle}>QrCode Generator</Text>
          </View>
          <View>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => this.setState({ Text_Input: text })}
              underlineColorAndroid="transparent"
              placeholder="enter ur Url"
            />
          </View>
          <View>
            <Button
              title="generate"
              type="outline"
              style={styles.button}
              onPress={this.getTextInputValue}
            />
          </View>
          <View style={{ width: '100%', margin: 30 }}>
            <QRCode
              value={this.state.Text_Output}
              size={500}
              bgColor='#000'
              fgColor='#fff'
            />
          </View>
          {/* </LinearGradient>> */}
        </View>
        <FooterItem
          Home={() => {
            this.props.navigation.navigate('Home');
          }}
          QrScanner={() => {
            this.props.navigation.navigate('QrScanner');
          }}
          QrGenerator={() => {
            this.props.navigation.navigate('QrGenerator');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginRight: 50,
    marginLeft: 50,
    paddingTop: 20
  },
  TextInput: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    bottom: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#c41f27',
    textAlign: 'center',
    borderRadius: 40
  },
  button: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#c41f27",
    marginBottom: 100,
    marginBottom: 100,
    borderRadius: 100
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 100
  },
  textTitle: {
    color: "#c41f27",
    textAlign: "center",
    fontSize: 18
  }
});

export default QrCodeGenerator; 
