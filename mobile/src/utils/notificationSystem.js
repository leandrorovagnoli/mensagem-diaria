import { Notifications } from 'expo';
import LocalStorage from '../utils/LocalStorage';
import * as Permissions from 'expo-permissions';
import moment from 'moment';
import 'moment/locale/pt-br';

export default {
    async scheduleNotification(dailyMessage) {
        const NOTIFICATION_STATUS = await LocalStorage.getItem('NOTIFICATION_STATUS')

        if (!NOTIFICATION_STATUS) {
            await Notifications.cancelAllScheduledNotificationsAsync();
            return;
        }
        const NOTIFICATION_TIME = moment(await LocalStorage.getItem('NOTIFICATION_TIME'))
        const NOTIFICATION_UPDATED = await LocalStorage.getItem('NOTIFICATION_UPDATED')

        if (NOTIFICATION_TIME == null || !NOTIFICATION_UPDATED)
            return;

        const localNotification = {
            title: 'Nova mensagem do dia',
            body: dailyMessage,
            android: {
                channelID: 'dailyMessagesChannel',
                sound: true,
                priority: 'max',
                vibrate: true
            }
        };

        let currentTime = moment(NOTIFICATION_TIME);

        const currentLocalTime = moment()
        if (NOTIFICATION_TIME < currentLocalTime)
            currentTime = currentTime.add(1, 'day')

        const schedulingOptions = {
            time: currentTime.valueOf(),
            repeat: 'day'
        }

        await Notifications.cancelAllScheduledNotificationsAsync();

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        await Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );

        await LocalStorage.setItem('NOTIFICATION_UPDATED', false);
    },

    async notificationsChannelCreate() {
        if (Platform.OS === 'android') {
            await Notifications.createChannelAndroidAsync('dailyMessagesChannel', {
                name: 'Daily Messages Channel',
                //description: '',
                sound: true,
                priority: 'max',
                vibrate: true,
                badge: true
            });
        }
    },

    async askPermissions() {
        // We need to ask for Notification permissions for ios devices
        await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
}