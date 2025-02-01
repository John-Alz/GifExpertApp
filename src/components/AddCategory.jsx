import PropTypes from "prop-types";
import { useState } from "react";

export function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim().toLowerCase();
        if (newInputValue.length <= 1) return; // Debe ser mayor de 2 caracteres el input
        // // onAddCategories(cat => [...cat, inputValue]);
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <form aria-label="form" onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
