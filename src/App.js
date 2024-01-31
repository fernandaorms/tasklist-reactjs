import { useState, useEffect } from 'react';
import './App.css';

import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';

function Button({ onClick, children, type = 'button' }) {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    );
}

function App() {
    const initialList = [
        { id: 0, task: 'It\'s beginning' },
        { id: 1, task: 'To look a lot' },
        { id: 2, task: 'Like Christmas' },
        { id: 3, task: 'Everywhere you go' },
    ]

    const localList = JSON.parse(localStorage.getItem('list'));

    const [input, setInput] = useState({ id: null, value: '' });

    const [list, setList] = useState(localList && localList.length > 0 ? localList : initialList);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);



    function handleSubmit(event) {
        event.preventDefault();

        if (input.value.trim() !== '') {
            if (input.id !== null) {
                const newList = [
                    ...list.slice(0, input.id),
                    { id: input.id++, task: input.value },
                    ...list.slice(input.id)
                ]

                setList(newList);
            } else {
                setList([
                    ...list,
                    { id: list.length, task: input.value }
                ]);
            }
        }

        setInput({ id: null, value: '' });
    }

    function handleInputChange(event) {
        setInput({ ...input, value: event.target.value });
    }

    function handleEdit(event, itemId) {
        event.preventDefault();

        setInput({ id: itemId, value: list[itemId].task });
    }

    function handleDelete(event, itemId) {
        event.preventDefault();

        const newArray = list.filter(item => item.id !== itemId);

        setList(newArray.map((item, index) => (
            { ...item, id: index }
        )));

        setInput({ id: null, value: '' });
    }


    return (
        <div className='container'>
            <div className='title'>
                <h1>To Do List</h1>
            </div>

            <div className='form'>
                <form>
                    <input type='text' placeholder='Press Enter or click  +  to add your item...' value={input.value} onChange={handleInputChange}></input>

                    <Button onClick={handleSubmit} type='submit'>
                        <FaPlus></FaPlus>
                    </Button>
                </form>
            </div>

            <div className='list'>
                <ul>
                    {list.map(item => (
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
        </div>
    );
}

export default App;
