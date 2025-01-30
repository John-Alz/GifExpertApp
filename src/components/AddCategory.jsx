import { useState } from "react";

export default function AddCategory({ onAddCategories }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return; // Debe ser mayor de 2 caracteres el input
        onAddCategories(cat => [...cat, inputValue]);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
