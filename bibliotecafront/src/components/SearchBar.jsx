import React from "react";
import "./SearchBarStyles.css";
import { useState } from "react";

export const SearchBar = ({placeholder, data, DataFiltered, page}) => {

    const [filteredData, setFilteredData] = useState([]);



    const handleFilter = (event) => {

        if (page == 0){
            const SearchWord = event.target.value;

            const newFilter = data.filter(
                value => value.titulo.toLowerCase().includes(SearchWord.toLowerCase()) ||
                value.autor.toLowerCase().includes(SearchWord.toLowerCase()) ||
                value.tipo.toLowerCase().includes(SearchWord.toLowerCase()) ||
                value.formato.toLowerCase().includes(SearchWord.toLowerCase())
            ).map(book => {return book});

            setFilteredData(newFilter);
            DataFiltered(filteredData)
        }
        else{
            const SearchWord = event.target.value;

            const newFilter = data.filter(
                event => event.nombre.toLowerCase().includes(SearchWord.toLowerCase()) ||
                event.apellido.toLowerCase().includes(SearchWord.toLowerCase())

            ).map(book => {return book});

            setFilteredData(newFilter);
            DataFiltered(filteredData)
        }
        
    }



    return(
        <>
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder} onChange={(event) => handleFilter(event)}/>
                </div>
            </div>
        </>
    )

}