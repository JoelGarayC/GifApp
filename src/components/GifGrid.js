import React from 'react'
import GifGridItem from './GifGridItem';
// import { getGifs } from './../helpers/getGifs';
import { useFetchGifs } from './../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages);
    // },[category])//solo se ejecuta una sola vez

    return (
        <>
            <h2>{category}</h2>
            {loading && <p>Loading</p>}
            
            <div className='cont-card'>
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img}/> //envia ..img todas la propiedades
                ))
            }
            </div>
        </>
    )
}

export default GifGrid