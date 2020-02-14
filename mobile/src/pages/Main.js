import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getCurrentGreeting from '../utils/checkGreeting';
import { MaterialIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';

function Main() {
    const sharedViewRef = useRef('sharedViewRef');

    async function shareButton() {
        const uri = await sharedViewRef.current.capture();
        await Sharing.shareAsync(uri);
    }

    function greetingMessage() {
        return getCurrentGreeting();
    }

    return <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerView}>
            <Text style={styles.greetingTitle}>{greetingMessage()}</Text>
            <MaterialIcons name="settings" size={25} color="#3FD59A" style={{ marginRight: 3, marginTop: 7 }} />
        </View>
        <ViewShot ref={sharedViewRef} style={{ alignSelf: 'flex-end', backgroundColor: '#273A4B' }}
            options={{
                format: "png",
                quality: 1,
                result: "tmpfile"
            }}>
            <View style={styles.headerDateMessage}>
                <Text style={styles.dateMessage}>Mensagem do dia</Text>
                <Text style={styles.dateMessage}>12 de Fevereiro de 2020</Text>
            </View>
            <Image
                source={require('../../assets/icons/quote-left-solid.png')}
                fadeDuration={1500}
                style={styles.quotationMarkLeft}
            />
            <Text style={styles.dailyMessage}>Quando te vi, peguei um burro e fugi. De saudade não aguentei, peguei um jegue e voltei.</Text>
            <Text style={styles.author}>Leandro Rovagnoli</Text>
            <View>
                <Image
                    source={require('../../assets/icons/quote-right-solid.png')}
                    fadeDuration={1500}
                    style={styles.quotationMarkRight}
                />
            </View>
        </ViewShot>
        <View style={styles.footerView}>
            <MaterialIcons name="favorite-border" size={30} color="#3FD59A" style={{ marginRight: 3, marginTop: 7 }} />
            <TouchableOpacity style={styles.generalButton} onPress={shareButton}>
                <MaterialIcons name="share" size={30} color="#3FD59A" style={{ marginRight: 3, marginTop: 7 }} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    safeArea: {
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
        marginBottom: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    greetingTitle: {
        fontFamily: 'CarterOne-Regular',
        color: '#FFF',
        fontSize: 25,
    },
    generalButton: {

    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDateMessage: {
        flex: 0.6,
        justifyContent: 'center',
    },
    quotationMarkLeft: {
        width: 25,
        height: 25,
        tintColor: '#3FD59A'
    },
    quotationMarkRight: {
        width: 25,
        height: 25,
        tintColor: '#3FD59A',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
    },
    dailyMessage: {
        fontFamily: 'CarterOne-Regular',
        textAlign: 'center',
        fontSize: 25,
        color: '#FFF',
        marginLeft: 20,
        marginRight: 20
    },
    author: {
        marginTop: 25,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: "bold",
        fontSize: 18,
        fontStyle: "italic",
        color: '#3FD59A',
        opacity: 0.6
    },
    dateMessage: {
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
        fontSize: 20,
        color: '#3FD59A',
    },
    footerView: {
        flex: 0.4,
        flexWrap: "wrap-reverse",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Main;