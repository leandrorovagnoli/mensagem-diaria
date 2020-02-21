import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import LocalStorage from '../utils/LocalStorage';
import NotificationSystem from '../utils/notificationSystem';

function Settings({ route }) {
    const [enableDailyNotification, setEnableDailyNotification] = useState(true);
    const [dateTimeNotification, setDateTimeNotification] = useState(null);
    const [showTimePicker, setShowTimePicker] = useState(false);

    useEffect(() => {
        const loadNotificationTime = async () => {

            const value = await LocalStorage.getItem('NOTIFICATION_TIME');

            if (value !== null)
                setDateTimeNotification(new Date(value));
        }

        const loadNotificationStatus = async () => {
            const value = await LocalStorage.getItem('NOTIFICATION_STATUS');

            if (value !== null)
                setEnableDailyNotification(value);
        }

        loadNotificationTime();
        loadNotificationStatus();
    }, [])

    const handleToggleEnableDailyNotification = async (value) => {
        setEnableDailyNotification(value);
        await LocalStorage.setItem('NOTIFICATION_STATUS', value);
    }

    const onChangeTimePicker = async (event, selectedDate) => {
        const currentDate = selectedDate || dateTimeNotification;
        setShowTimePicker(false);
        setDateTimeNotification(currentDate);

        await LocalStorage.setItem('NOTIFICATION_TIME', currentDate);
        await LocalStorage.setItem('NOTIFICATION_UPDATED', true);

        const { messageOfTheDay } = route.params;
        await NotificationSystem.scheduleNotification('Pensamento do dia', messageOfTheDay)
    }

    const getLocaleTime = () => {
        return (dateTimeNotification !== null && dateTimeNotification !== undefined)
            ? new Date(dateTimeNotification).toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ')
            : '';
    }

    const showTimepicker = () => {
        setShowTimePicker(true);
    };

    return <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Notificações</Text>
        <View style={styles.viewContainer}>
            <View style={styles.ViewInnerContainer}>
                <Text style={styles.generalText}>Enviar Mensagem Diária</Text>
                <Switch
                    thumbColor="#3FD59A"
                    value={enableDailyNotification}
                    onValueChange={v => {
                        handleToggleEnableDailyNotification(v);
                    }}
                />
            </View>
        </View>
        {enableDailyNotification && (
            <View style={styles.viewTimePicker}>
                <Text
                    style={styles.timePickerText}
                    onPress={showTimepicker}
                >
                    {getLocaleTime()}
                </Text>

                {showTimePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={dateTimeNotification}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeTimePicker}
                    />
                )}
            </View>
        )}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    safeArea: {
        marginLeft: 25,
        marginTop: 25,
        marginRight: 25,
        marginBottom: 5,
    },
    title: {
        fontFamily: 'CarterOne-Regular',
        fontSize: 18,
        color: '#3FD59A',
        paddingBottom: 6,
        borderBottomWidth: 0.3,
        borderColor: '#3FD59A',
    },
    viewContainer: {
        marginLeft: 18,
        marginTop: 14,
        paddingRight: 10,
        flexDirection: 'row',
    },
    ViewInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTimePicker: {
        alignItems: 'center',
        paddingTop: 15,
    },
    timePickerText: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: "sans-serif-medium",
        borderBottomWidth: 0.5,
        borderColor: '#FFF',
    },
    generalText: {
        color: '#FFF',
        fontSize: 17,
        fontFamily: "sans-serif-medium",

    }
})

export default Settings;