import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formatDateOfTheDay, getCurrentGreeting } from '../utils/dateFormat';
import { MaterialIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';
import api from '../services/api';

function Main() {
    const sharedViewRef = useRef('sharedViewRef');
    const [messageOfTheDay, setMessageOfTheDay] = useState('')
    const [author, setAuthor] = useState('')
    const [dateMessage, setDateMessage] = useState('')

    async function shareButton() {
        const uri = await sharedViewRef.current.capture();
        await Sharing.shareAsync(uri);
    }

    async function loadDailyMessage() {
        const dailyMessage = await api.get(`/mensagem/data/${new Date().toISOString().substr(0, 10)}`)

        if (dailyMessage.data != null && dailyMessage.data.length > 0) {
            setDateMessage(dailyMessage.data[0].dateMessage);
            setAuthor(dailyMessage.data[0].author);
            setMessageOfTheDay(dailyMessage.data[0].dailyMessage);
        }
    }

    loadDailyMessage();

    return <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerView}>
            <Text style={styles.greetingTitle}>{getCurrentGreeting()}</Text>
            <MaterialIcons name="settings" size={25} color="#3FD59A" style={{ marginRight: 3, marginTop: 7 }} />
        </View>
        <ViewShot ref={sharedViewRef} style={{ alignSelf: 'center', backgroundColor: '#273A4B' }}
            options={{
                format: "png",
                quality: 1,
                result: "tmpfile"
            }}>
            <View style={styles.headerDateMessage}>
                <Text style={styles.dateMessageLine1}>Mensagem do dia</Text>
                <Text style={styles.dateMessageLine2}>{formatDateOfTheDay(dateMessage)}</Text>
            </View>
            <Image
                source={require('../../assets/icons/quote-left-solid.png')}
                fadeDuration={1500}
                style={styles.quotationMarkLeft}
            />
            <Text style={styles.dailyMessage}>{messageOfTheDay}</Text>
            <Text style={styles.author}>{author}</Text>
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
        marginLeft: 10,
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
        right: 10,
    },
    dailyMessage: {
        fontFamily: 'CarterOne-Regular',
        textAlign: 'center',
        fontSize: 22,
        color: '#FFF',
        marginLeft: 20,
        marginRight: 20,
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
    dateMessageLine1: {
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
        fontSize: 20,
        color: '#3FD59A',
        opacity: 0.7,
    },
    dateMessageLine2: {
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
        fontSize: 25,
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