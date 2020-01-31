import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';

function MessageForm() {
    const [author, setAuthor] = useState('');
    const [dailyMessage, setDailyMessage] = useState('');;
    const [date, setDate] = useState('');

    async function handleAddSubmit(e) {
        e.preventDefault();

        await api.post('/', {
            author,
            dailyMessage,
            date
        })
        // .then(response => {
        //     const { message } = response.data
        //     console.log(message);
        // }).catch(error => {
        //     console.log(error.response);
        // })

        setAuthor('');
        setDailyMessage('');
        setDate('');
    }

    return (
        <>
            <form name="topBoxForm" onSubmit={handleAddSubmit}>
                <div className="inputBlock">
                    <label htmlFor="author">Autor: </label>
                    <input type="text"
                        id="author"
                        name="author"
                        required
                        value={author}
                        onChange={e => setAuthor(e.target.value)} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="dailyMessage">Mensagem: </label>
                    <textarea name="dailyMessage"
                        id="dailyMessage"
                        required
                        value={dailyMessage}
                        onChange={e => setDailyMessage(e.target.value)} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="date">Data: </label>
                    <input type="date"
                        id="date"
                        name="date"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                </div>
                <button type="submit"  >Salvar</button>
            </form>
        </>
    )
};

export default MessageForm;