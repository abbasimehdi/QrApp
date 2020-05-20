import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Platform, TouchableNativeFeedbackBase } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import FooterItem from '../../components/layouts/footer/FooterItem';
import { ScrollView } from 'react-native-gesture-handler';

class QRCodeScannerPackege extends Component {
  state = {
    qr: ""
  }
  onRead = e => {
    this.setState({ qr: e.data })
    console.log(e);
  }

  render() {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android') {
      TouchableCmp = TouchableNativeFeedback;
    } else {
      TouchableCmp = TouchableOpacity;
    }

    return (
      <View>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.camera}>
              <QRCodeScanner
                onRead={this.onRead}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                ref={(node) => { this.scanner = node }}
              />
            </View>
            <View style={styles.details}>
              {this.state.qr ?
                <TouchableCmp onPress={() => { }}>
                  <QRCode
                    value={this.props.qr}
                  />
                </TouchableCmp>
                : null
              }
              <TouchableCmp style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>
                  {this.state.qr}
                </Text>
              </TouchableCmp>
            </View>
          </ScrollView>
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
    height: '92%'
  },
  camera: {
    height: 600
  },
  details: {
    height: 300
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'black',
  },
  buttonTouchable: {
    padding: 16
  }
});
export default QRCodeScannerPackege;