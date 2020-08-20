import React, { useState, useEffect } from 'react';
import './style.css';
import dateFormat from '../../utils/momentDateFormat';

function EditMessageForm({ updateDailyMessage, setCurrentDailyMessage, currentDailyMessage, setEditing }) {
    const [author, setAuthor] = useState(currentDailyMessage.author);
    const [message, setDailyMessage] = useState(currentDailyMessage.message);;
    const [date, setDateMessage] = useState(currentDailyMessage.date);

    useEffect(() => {
        setDailyMessage(currentDailyMessage.message)
        setAuthor(currentDailyMessage.author)
        setDateMessage(currentDailyMessage.date)
    },
        [currentDailyMessage])

    function handleUpdateSubmit(e) {
        e.preventDefault();

        updateDailyMessage(currentDailyMessage.id,
            {
                id: currentDailyMessage.id,
                author,
                message,
                date
            });

        setEditing(false);
        setAuthor('');
        setDailyMessage('');
        setDateMessage('');
        // setCurrentDailyMessage({});
    }

    function dateMessageFormat(date) {
        return dateFormat(date, 'YYYY-MM-DD');
    }

    return (
        <>
            <form name="topBoxForm" onSubmit={handleUpdateSubmit}>
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
                        value={message}
                        onChange={e => setDailyMessage(e.target.value)} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="dateMessage">Data: </label>
                    <input type="Date"
                        maxLength="10"
                        id="dateMessage"
                        name="dateMessage"
                        required
                        value={dateMessageFormat(date)}
                        onChange={e => setDateMessage(e.target.value)} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
};

export default EditMessageForm;