import React, { useState, useEffect } from 'react';
import './style.css';
import dateFormat from '../../utils/momentDateFormat';

function EditMessageForm({ updateDailyMessage, setCurrentDailyMessage, currentDailyMessage, setEditing }) {
    const [author, setAuthor] = useState(currentDailyMessage.author);
    const [dailyMessage, setDailyMessage] = useState(currentDailyMessage.dailyMessage);;
    const [dateMessage, setDateMessage] = useState(currentDailyMessage.dateMessage);

    useEffect(() => {
        setDailyMessage(currentDailyMessage.dailyMessage)
        setAuthor(currentDailyMessage.author)
        setDateMessage(currentDailyMessage.dateMessage)
    },
        [currentDailyMessage])

    function handleUpdateSubmit(e) {
        e.preventDefault();

        updateDailyMessage(currentDailyMessage._id,
            {
                _id: currentDailyMessage._id,
                author,
                dailyMessage,
                dateMessage
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
                        value={dailyMessage}
                        onChange={e => setDailyMessage(e.target.value)} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="dateMessage">Data: </label>
                    <input type="Date"
                        maxLength="10"
                        id="dateMessage"
                        name="dateMessage"
                        required
                        value={dateMessageFormat(dateMessage)}
                        onChange={e => setDateMessage(e.target.value)} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
};

export default EditMessageForm;