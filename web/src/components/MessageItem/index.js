import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function MessageItem() {
    return (
        <>
            <li className="content-block">
                <div className="edit-delete-bar">
                    <div className="editDiv">
                        <a type="submit" href="/">
                            <FontAwesomeIcon icon={faPencilAlt} className="iconHover" />
                        </a>
                    </div>
                    <div className="deleteDiv">
                        <a type="submit" href="/">
                            <FontAwesomeIcon icon={faTrashAlt} className="iconHover" />
                        </a>
                    </div>
                </div>
                <p>Quando te vi, peguei um burro e fugi. De saudade não aguentei, peguei um jegue e voltei.</p>
                <span name="spanAuthor">Leandro Rovagnoli</span>
                <span name="spanDate">29/01/2020</span>
            </li>
        </>
    );
}

export default MessageItem;