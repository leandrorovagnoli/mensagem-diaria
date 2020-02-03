import moment from 'moment';

function dateFormat(date, pattern) {
    if (!date)
        return '';

    const newDate = date.substring(0, 10);
    return moment(newDate).locale('pt-BR').format(pattern);
}

export default dateFormat;