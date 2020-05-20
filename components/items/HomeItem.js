import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, View, uri, Button, Image } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderItem from './HeaderItem';
import LinearGradient from 'react-native-linear-gradient';
const HomeItems = props => {
    return (
        <View style={styles.container}>
            {/* <HeaderItem /> */}
            <LinearGradient colors={['#D3D3D3', '#D3D3D3', '#D3D3D3']} style={{ height: '100%' }}>
                <View style={styles.clm}>
                    <Grid>
                        <Col
                            style={styles.box}
                        >
                           <TouchableOpacity onPress={props.QrGenerate}>
                           <Image source={require('../../assets/images/generate.jpg')} style={styles.images} />
                           </TouchableOpacity>
                        </Col>
                        <Col
                            style={styles.box}
                        >
                             <TouchableOpacity onPress={props.QrScanner}>
                           <Image source={require('../../assets/images/scan.jpeg')} style={styles.images} />
                           </TouchableOpacity>
                        </Col>
                    </Grid>
                </View>
            </LinearGradient>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '92%'
    },
    header: {
        paddingRight: 15,
        paddingLeft: 15
    },
    clm: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    },
    icn: {
        color: 'white'
    },
    images: {
        width: '100%',
        height: 200
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%'
    }
});
export default HomeItems;