import React from 'react'

export const Select = ({ options, value, setValue }) => {
    return (
        <select value={value} onChange={({ target }) => setValue(target.value)}>
            <option value="" disabled>Selecione</option>
            {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    )
}
