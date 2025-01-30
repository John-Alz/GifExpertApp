import { useState } from 'react'
import AddCategory from './components/AddCategory';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([
            ...categories,
            'Demon Slayer'
        ]);

        // setCategories(cat => [...cat, 'Valorant'])
    }

    console.log(categories);


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de gif */}

            <AddCategory />

            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map((category, id) => {
                        return (
                            <div key={id}>
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
