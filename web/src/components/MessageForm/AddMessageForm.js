import React, { useState } from 'react';
import './style.css';

function MessageForm({ addDailyMessage }) {
    const [author, setAuthor] = useState('');
    const [message, setDailyMessage] = useState('');;
    const [date, setDateMessage] = useState('');

    function handleAddSubmit(e) {
        e.preventDefault();

        addDailyMessage({
            author,
            message,
            date
        });

        setAuthor('');
        setDailyMessage('');
        setDateMessage('');
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
                    <label htmlFor="message">Mensagem: </label>
                    <textarea name="message"
                        id="message"
                        required
                        value={message}
                        onChange={e => setDailyMessage(e.target.value)} />
                </div>
                <div className="inputBlock">
                    <label htmlFor="date">Data: </label>
                    <input type="date"
                        id="date"
                        name="date"
                        required
                        value={date}
                        onChange={e => setDateMessage(e.target.value)} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
};

export default MessageForm;