
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {

    const { images, isLoading, error } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    isLoading ? <h1>Cargando...</h1> : null
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
        </>
    )
}
