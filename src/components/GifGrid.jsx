
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { FaTrash } from "react-icons/fa";


export function GifGrid({ category, categories, onDeleteCategory }) {

    const { images, isLoading } = useFetchGifs(category, categories);

    const onSubmit = () => {
        onDeleteCategory(category)
    }


    return (
        <div className="grid-container">
            <div className="title-category-container">
                <h3>{category}</h3>
                <button onClick={onSubmit}><FaTrash color="red" size={27} />
                </button>
            </div>
            <div className="card-grid">
                {
                    isLoading && <h2>Cargando...</h2> //If sin el else.
                }
                {
                    images.map((image) =>
                    (
                        <GifItem
                            key={image.id}
                            {...image} //muy bueno. Exparcimos properties

                        />
                    ))
                }
            </div>
        </div>
    )
}
