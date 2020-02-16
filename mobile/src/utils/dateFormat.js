import moment from 'moment';
import 'moment/locale/pt-br'

function getCurrentGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12)
        return 'Bom dia!';
    else if (currentHour >= 12 && currentHour < 18)
        return 'Boa tarde!';
    else if (currentHour >= 18)
        return 'Boa noite!';
}

function formatDateOfTheDay(date) {
    if (!date)
        return '';

    const dateWithoutTime = date.substring(0, 10);
    return moment(dateWithoutTime).locale('pt-BR').format('LL');
}

export {
    getCurrentGreeting,
    formatDateOfTheDay
}