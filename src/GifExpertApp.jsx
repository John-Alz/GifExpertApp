import { useState } from 'react'
import AddCategory from './components/AddCategory';

export default function GifExpertApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = () => {
        setCategories([
            ...categories,
            'Demon Slayer'
        ]);

        // setCategories(cat => [...cat, 'Valorant']) <== Importante en <AddCategory/>
    }

    console.log(categories);


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de gif */}

            <AddCategory onAddCategories={setCategories} />

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
