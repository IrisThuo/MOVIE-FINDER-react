import React, { useState } from 'react';

function SearchBar() {

    const [movies, setMovies] = useState()
    

    const [searchTerm ,setSearchTerm] = useState('')

    function handleOnSubmit(e){
        e.preventDefault()
        if(searchTerm){
            fetch("http://localhost:9292/movies/" + {searchTerm})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMovies(data)               
            })
        }
            setSearchTerm('')
        
    }

    function handleOnChange(e){
        setSearchTerm(e.target.value)
    }

    return (
        <div>
        <form onSubmit={handleOnSubmit}>
        <input 
        className="search" 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
        />  
        </form>
        </div>
    );
}

export default SearchBar;