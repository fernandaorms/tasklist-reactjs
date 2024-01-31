import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function TaskList({ taskList, handleEdit, handleDelete }) {
    return (
        <div className='list'>
            <ul>
                {taskList.map(item => (
                    <li key={item.id} className='item'>
                        <label>
                            <input type='checkbox' />
                            <i className='check'></i>
                            <span>{item.task}</span>
                            <i className='edit' onClick={(e) => handleEdit(e, item.id)}><FaEdit></FaEdit></i>
                            <i className='trash' onClick={(e) => handleDelete(e, item.id)}><FaTrashAlt></FaTrashAlt></i>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
