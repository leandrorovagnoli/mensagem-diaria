import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import dateFormat from '../../utils/momentDateFormat';

function MessageItem({ data, deleteDailyMessage, editRow }) {

    function dateMessageFormat(date) {
        return dateFormat(date, 'DD/MM/YYYY');
    }

    function handleDeleteMessage(e) {
        e.preventDefault();

        deleteDailyMessage(data._id);
    }

    function handleEditMessage(e) {
        e.preventDefault();

        editRow(data);
    }

    return (
        <>
            <li className="content-block">
                <div className="edit-delete-bar">
                    <div className="editDiv">
                        <a type="submit" href="/" onClick={handleEditMessage}>
                            <FontAwesomeIcon icon={faPencilAlt} className="iconHover" />
                        </a>
                    </div>
                    <div className="deleteDiv">
                        <a type="submit" href="/" onClick={handleDeleteMessage}>
                            <FontAwesomeIcon icon={faTrashAlt} className="iconHover" />
                        </a>
                    </div>
                </div>
                <p>{data.dailyMessage}</p>
                <span name="spanAuthor">{data.author}</span>
                <span name="spanDate">{dateMessageFormat(data.dateMessage)}</span>
            </li>
        </>
    );
}

export default MessageItem;