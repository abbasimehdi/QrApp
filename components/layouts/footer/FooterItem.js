import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View, Col } from 'native-base';
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Toast from 'react-native-simple-toast';
const FooterItem = props => {
    function handleClick() {
        Toast.show('This section not yet designed.', Toast.SHORT);
    }
    return (
        <View style={{ height: '8%' }}>
            <Container>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button
                            vertical
                            onPress={handleClick}
                        >
                            <Icon
                                name="apps"
                                style={styles.icn}
                            />
                        </Button>
                        <Button
                            vertical
                            onPress={props.QrScanner}
                        >
                            <Icon name="camera"
                                style={styles.icn}
                            />
                        </Button>
                        <Button
                            vertical
                            onPress={props.Home}
                        >
                            <Icon name="home"
                                style={styles.icn}
                            />
                        </Button>
                        <Button
                            vertical
                            onPress={props.QrGenerator}
                        >
                            <Icon name="barcode"
                                style={styles.icn}
                            />
                        </Button>
                        <Button
                            onPress={props.Authenticate}
                            vertical
                        >
                            <Icon name="person"
                                style={styles.icn}
                            />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </View>
    );
};
const styles = StyleSheet.create({
    icn: {
        color: Colors.primary
    }
})
export default FooterItem;