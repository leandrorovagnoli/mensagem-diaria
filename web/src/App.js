import React from 'react';
import MessageForm from './components/MessageForm/index';
import MessageItem from './components/MessageItem/index';

import './Global.css';
import './App.css';
import './Main.css';


function App() {
  return (
    <>
      <div id="app">
        <main>
          <div className="topBox">
            <strong>Cadastro de Mensagem Diária</strong>
            <MessageForm></MessageForm>
          </div>
        </main>
        <div className="content">
          <ul>
            <MessageItem></MessageItem>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;