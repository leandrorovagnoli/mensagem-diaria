import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mensagemdiaria-webapi.azurewebsites.net/v1/dailymessages'
});

export default api;