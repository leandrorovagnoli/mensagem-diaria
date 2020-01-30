import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

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
          </div>

        </main>
        <div className="content">
          <ul>
            <li className="content-block">
              <div className="edit-delete-bar">
                <div className="editDiv">
                  <a className="btn-edit" type="submit" href="/">
                    <FontAwesomeIcon icon={faPencilAlt} className="editIcon" />
                  </a>
                </div>
                <div className="deleteDiv">
                  <a className="btn-delete" type="submit" href="/">
                    <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" />
                  </a>
                </div>
              </div>
              <p>Quando te vi, peguei um burro e fugi. De saudade não aguentei, peguei um jegue e voltei.</p>
              <div className="content-block-footer">
                <span name="spanAuthor">Leandro Rovagnoli</span>
                <span name="spanDate">29/01/2020</span>
              </div>

            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
            <li className="content-block">
              Meu texto
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;