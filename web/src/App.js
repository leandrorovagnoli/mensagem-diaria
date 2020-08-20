import React, { useState, useEffect } from 'react';
import EditMessageForm from './components/MessageForm/EditMessageForm';
import AddMessageForm from './components/MessageForm/AddMessageForm';
import MessageItem from './components/MessageItem/index';
import api from './services/api';

import './Global.css';
import './App.css';
import './Main.css';


function App() {
  const [dailyMessages, setDailyMessages] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { _id: null, author: '', dailyMessage: '', dateMessage: '' }
  const [currentDailyMessage, setCurrentDailyMessage] = useState(initialFormState)

  useEffect(() => {
    async function loadDailyMessages() {
      const response = await api.get('/');

      setDailyMessages(response.data);
    }

    loadDailyMessages();
  })

  async function addDailyMessage(data) {
    const response = await api.post('/', {
      'author': data.author,
      'message': data.message,
      'date': data.date
    })

    setDailyMessages([...dailyMessages, response.data]);
  }

  async function deleteDailyMessage(id) {
    await api.delete(`/${id}`);

    setDailyMessages(dailyMessages.filter(dm => dm.id !== id));
    setEditing(false);
  }

  async function updateDailyMessage(id, updatedDailyMessage) {
    await api.put(`/${id}`, {
      'author': updatedDailyMessage.author,
      'message': updatedDailyMessage.message,
      'date': updatedDailyMessage.date
    });

    setDailyMessages(dailyMessages.map(dm => (dm.id === id ? updatedDailyMessage : dm)))
  }

  function editRow(editingDailyMessage) {
    setEditing(true)
    setCurrentDailyMessage({
      id: editingDailyMessage.id,
      author: editingDailyMessage.author,
      date: editingDailyMessage.date,
      message: editingDailyMessage.message
    })
  }

  return (
    <>
      <div id="app">
        <main>
          <div className="topBox">
            <strong>Cadastro de Mensagem Diária</strong>
            {!editing ?
              (<>
                <AddMessageForm addDailyMessage={addDailyMessage}></AddMessageForm>
              </>
              ) : (
                <EditMessageForm
                  updateDailyMessage={updateDailyMessage}
                  setCurrentDailyMessage={setCurrentDailyMessage}
                  currentDailyMessage={currentDailyMessage}
                  setEditing={setEditing}></EditMessageForm>
              )}
          </div>
        </main>
        <div className="content">
          <ul>
            {
              dailyMessages.map(item => (
                <MessageItem key={item.id} data={item} deleteDailyMessage={deleteDailyMessage} editRow={editRow}></MessageItem>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;