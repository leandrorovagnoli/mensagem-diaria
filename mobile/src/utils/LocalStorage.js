import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

export default {
    async setItem(key, value) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('AsyncStorage#setItem error: ' + error.message);
        }
    },
    async getItem(key) {
        return await AsyncStorage.getItem(key)
            .then((result) => {
                if (result) {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                    }
                }
                return result;
            });
    },
    async removeItem(key) {
        return await AsyncStorage.removeItem(key);
    },
    async loadDefaultSettings() {
        const NOTIFICATION_TIME = await this.getItem('NOTIFICATION_TIME');
        const NOTIFICATION_STATUS = await this.getItem('NOTIFICATION_STATUS');
        const NOTIFICATION_UPDATED = await this.getItem('NOTIFICATION_UPDATED');

        if (NOTIFICATION_UPDATED === null)
            await this.setItem('NOTIFICATION_UPDATED', true); //default value

        if (NOTIFICATION_STATUS === null)
            await this.setItem('NOTIFICATION_STATUS', true); //default value

        if (NOTIFICATION_TIME === null)
            await this.setItem('NOTIFICATION_TIME', moment().set({
                'hour': '10',
                'minute': '00',
                'second': '00'
            })); //default value
    }
}