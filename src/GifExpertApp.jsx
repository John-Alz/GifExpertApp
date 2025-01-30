import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon ball', 'One punch']);

    const onAddCategory = (keyWord) => {

        if (categories.includes(keyWord)) return;

        setCategories([
            ...categories,
            keyWord
        ]);

        // setCategories(cat => [...cat, 'Valorant']) <== Importante en <AddCategory/> comentado
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category, id) =>
                (
                    <GifGrid key={category} category={category} />
                )
                )
            }
        </>
    )
}
