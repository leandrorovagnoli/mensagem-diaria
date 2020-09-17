import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCurrentGreeting } from '../utils/dateFormat';
import { MaterialIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';
import moment from 'moment';
import 'moment/locale/pt-br';
import LocalStorage from '../utils/LocalStorage';
import NotificationSystem from '../utils/notificationSystem';
import * as SplashScreen from 'expo-splash-screen';
import api from '../services/api';
import dataModel from '../../src/dataModel.json';

function Main(props) {
    const sharedViewRef = useRef('sharedViewRef');
    const [messageOfTheDay, setMessageOfTheDay] = useState('')
    const [author, setAuthor] = useState('')
    const [dateMessage, setDateMessage] = useState('')

    useEffect(() => {
        LocalStorage.loadDefaultSettingsAsync();
        SplashScreen.preventAutoHideAsync();

        const loadDailyMessage = async () => {
            // USING API (MONGODB)
            // const dailyMessage = await api.get(`/${moment().utc(true).toISOString().substring(0, 10)}`)

            // if (dailyMessage.data != null && dailyMessage.data != undefined) {
            //     setDateMessage(moment.utc(dailyMessage.data.date).format('LL'));
            //     setAuthor(dailyMessage.data.author == "" ? "Desconhecido" : dailyMessage.data.author);
            //     setMessageOfTheDay(dailyMessage.data.message);
            //     NotificationSystem.scheduleNotification(dailyMessage.data.message)
            // }

            // USING LOCAL DB
            const dailyMessage = await dataModel.find(x => x.dateMessage.startsWith(`${moment().utc(true).toISOString().substring(0, 10)}`));
            if (dailyMessage != null) {
                setDateMessage(moment.utc().format('LL'));
                setAuthor(dailyMessage.author == "" ? "Desconhecido" : dailyMessage.author);
                setMessageOfTheDay(dailyMessage.dailyMessage);
            }

            await SplashScreen.hideAsync();
        }

        loadDailyMessage();

    }, [])

    const shareButton = async () => {
        const uri = await sharedViewRef.current.capture();
        await Sharing.shareAsync(uri);
    }

    const settingsButton = () => {
        props.navigation.navigate('Settings', { messageOfTheDay: messageOfTheDay });
    }

    return <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerView}>
            <Text style={styles.greetingTitle}>{getCurrentGreeting()}</Text>

        </View>
        <ViewShot ref={sharedViewRef} style={{ alignSelf: 'center', backgroundColor: '#273A4B' }}
            options={{
                format: "png",
                quality: 1,
                result: "tmpfile"
            }}>
            <View style={styles.headerDateMessage}>
                <Text style={styles.dateMessageLine1}>Pensamento do dia</Text>
                <Text style={styles.dateMessageLine2}>{dateMessage}</Text>
            </View>
            <Image
                source={require('../../assets/icons/quote-left-solid.png')}
                fadeDuration={1500}
                style={styles.quotationMarkLeft}
            />
            <Text selectable={true} style={styles.dailyMessage}>{messageOfTheDay}</Text>
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
            {/* <MaterialIcons name="favorite-border" size={30} color="#3FD59A" style={{ marginRight: 3, marginTop: 7 }} /> */}
            <TouchableOpacity onPress={shareButton}>
                <MaterialIcons name="share" size={30} color="#3FD59A" style={styles.generalButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={settingsButton}>
                <MaterialIcons name="settings" size={25} color="#3FD59A" style={styles.generalButton} />
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
        marginRight: 3,
        marginTop: 7
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
        marginTop: 20,
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