import { useState } from 'react'

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);



    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de gif */}
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
