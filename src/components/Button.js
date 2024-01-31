import React from 'react';

export default function Button({ onClick, children, type = 'button' }) {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    );
}
