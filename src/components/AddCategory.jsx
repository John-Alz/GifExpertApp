import { useState } from "react";

export default function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return; // Debe ser mayor de 2 caracteres el input
        // // onAddCategories(cat => [...cat, inputValue]);
        onNewCategory(newInputValue)
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
