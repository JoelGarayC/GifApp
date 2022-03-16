import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            {/* <button onClick={handelAdd}>Agregar</button> */}
    
            <ul>
                {
                    categories.map( (category) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }   
            </ul>
        </>
    )
}

export default GifExpertApp