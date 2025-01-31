import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon ball']);

    const onAddCategory = (keyWord) => {

        if (categories.includes(keyWord)) return;

        setCategories([
            keyWord,
            ...categories
        ]);

        // setCategories(cat => [...cat, 'Valorant']) <== Importante en <AddCategory/> comentado
    };

    const onDeleteCategory = (keyWordDelete) => {
        const newArr = categories.filter(word => word !== keyWordDelete);
        setCategories(newArr)
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.length > 0 ? categories.map((category) =>
                (
                    <GifGrid key={category} category={category} categories={categories} onDeleteCategory={onDeleteCategory} />
                )
                ) : <h2 className='empty-grid'>Busca tus gifs favoritos!!!</h2>
            }
        </>
    )
}
