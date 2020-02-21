import { Notifications } from 'expo';
import LocalStorage from '../utils/LocalStorage';
import moment from 'moment';
import 'moment/locale/pt-br';

export default {
    async scheduleNotification(notificationTitle, notificationMessage) {
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
            title: notificationTitle,
            body: notificationMessage
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
    }
}