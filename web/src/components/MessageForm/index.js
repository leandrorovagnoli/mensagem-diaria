import React from 'react';
import './style.css';

function MessageForm() {
    return (
        <>
            <form name="topBoxForm">
                <div className="inputBlock">
                    <label htmlFor="author">Autor: </label>
                    <input type="text"
                        id="author"
                        name="author"
                        required
                    />
                </div>
                <div className="inputBlock">
                    <label htmlFor="dailyMessage">Mensagem: </label>
                    <textarea name="dailyMessage"
                        id="dailyMessage"
                        required />
                </div>
                <div className="inputBlock">
                    <label htmlFor="date">Data: </label>
                    <input type="date"
                        id="date"
                        name="date"
                        required />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
};

export default MessageForm;