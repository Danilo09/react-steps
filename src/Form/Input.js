import React from 'react'

export const Input = ({ id, label, setValue, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
                id={id}
                name={id}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
        </>
    )
}
