import React from 'react';
import { FaPlus } from 'react-icons/fa';

import Button from './Button';

export default function Form({ placeholder, value, handleInputChange, handleSubmit }) {
    return (
        <div className='form'>
            <form>
                <input type='text' placeholder={placeholder} value={value} onChange={handleInputChange} />

                <Button onClick={handleSubmit} type='submit'>
                    <FaPlus></FaPlus>
                </Button>
            </form>
        </div>
    );
}
