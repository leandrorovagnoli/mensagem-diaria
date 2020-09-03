import * as Notifications from 'expo-notifications';
import LocalStorage from './LocalStorage';
import moment from 'moment';
import 'moment/locale/pt-br';
import { AndroidNotificationPriority } from 'expo-notifications';

export default {
    async scheduleNotification(dailyMessage) {
        const NOTIFICATION_STATUS = await LocalStorage.getItem('NOTIFICATION_STATUS');
        if (!NOTIFICATION_STATUS) {
            await Notifications.cancelAllScheduledNotificationsAsync();
            return;
        }

        const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
        if (scheduledNotifications != null && scheduledNotifications.length > 0) {
            let NOTIFICATION_UPDATED = await LocalStorage.getItem('NOTIFICATION_UPDATED');
            if (NOTIFICATION_UPDATED == null)
                NOTIFICATION_UPDATED = true;

            if (!NOTIFICATION_UPDATED) {
                return;
            }
            await Notifications.cancelAllScheduledNotificationsAsync();
        }
        const NOTIFICATION_TIME = moment(await LocalStorage.getItem('NOTIFICATION_TIME'))
        if (NOTIFICATION_TIME == null) {
            return;
        }
        const currentTime = moment(NOTIFICATION_TIME);

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Pensamento do dia',
                body: 'Clique aqui para visualizar a mensagem no app',
                priority: AndroidNotificationPriority.MAX,
            },
            trigger: {
                hour: currentTime.hour(),
                minute: currentTime.minute(),
                repeats: true,
            },
        })

        await LocalStorage.setItem('NOTIFICATION_UPDATED', false);
    },
}