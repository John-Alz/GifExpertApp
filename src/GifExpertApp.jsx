import { useState } from 'react'
import AddCategory from './components/AddCategory';

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

    console.log(categories);


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de gif */}

            <AddCategory onNewCategory={onAddCategory} />

            <ol>
                {
                    categories.map((category, id) => {
                        return (
                            <div key={category}>
                                <li>{category}</li>
                            </div>
                        )
                    })
                }
            </ol>
            {/* Gif item */}
        </>
    )
}
