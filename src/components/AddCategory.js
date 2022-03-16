import React,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//por defecto sn recargar
        
        if (inputValue.trim().length > 2) {
            setCategories( catg => [inputValue,...catg]);
            setinputValue('');//borrar la palabra despues del submit      
        }else{
            alert('el campo esta vacio');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Escribe aqui ...'
            /> 
                  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;