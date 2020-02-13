import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import getCurrentGreeting from '../utils/checkGreeting';
import { MaterialIcons } from '@expo/vector-icons';

function Main() {
    function greetingMessage() {
        return getCurrentGreeting();
    }

    return <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerTopView}>
            <Text style={styles.greetingTitle}>{greetingMessage()}</Text>
            <MaterialIcons name="settings" size={30} color="#FFF" style={{ marginRight: 3, marginTop: 7 }} />
        </View>
        <View style={styles.headerDateMessage}>
            <Text style={styles.dateMessage}>Mensagem do dia</Text>
            <Text style={styles.dateMessage}>12 de Fevereiro de 2020</Text>
        </View>
        <View style={styles.messageContent}>
            <View style={styles.quotationMarksView}>
                <Image
                    source={require('../../assets/icons/quote-left-solid.png')}
                    fadeDuration={1500}
                    style={styles.quotationMark}
                />
                <Image
                    source={require('../../assets/icons/quote-right-solid.png')}
                    fadeDuration={1500}
                    style={styles.quotationMark}
                />
            </View>
            <View>
                <Text style={styles.dailyMessage}>Quando te vi, peguei um burro e fugi. De saudade não aguentei, peguei um jegue e voltei.</Text>
                <Text style={styles.author}>Leandro Rovagnoli</Text>
            </View>
            <View style={styles.headerBottomView}>
                <MaterialIcons name="favorite-border" size={30} color="#FFF" style={{ marginRight: 3, marginTop: 7 }} />
                <MaterialIcons name="share" size={30} color="#FFF" style={{ marginRight: 3, marginTop: 7 }} />
            </View>
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
        color: '#38e293',
        fontSize: 30,
    },
    headerTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDateMessage: {
        flex: 0.6,
        justifyContent: 'center',
    },
    messageContent: {
        flex: 1,
        justifyContent: 'center',
    },
    quotationMarksView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    quotationMark: {
        width: 25,
        height: 25,
        tintColor: '#38e293'
    },
    dailyMessage: {
        fontFamily: 'CarterOne-Regular',
        textAlign: 'center',
        fontSize: 30,
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
        color: '#000',
    },
    dateMessage: {
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
        fontSize: 25,
        color: '#000',
    },
    headerBottomView: {
        flex: 1,
        flexWrap: "wrap-reverse",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Main;