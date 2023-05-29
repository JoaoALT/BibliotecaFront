import { useEffect, useState } from "react";
import { Tablalibro } from "../components/TablaLibros";
import { getLibros } from "../requests/getLibros";
import { SearchBar } from "../components/SearchBar";
import "./MenuStyles.css";

export const Menu = () => {
    const [libros, setLibros] = useState([]);
    const [librosFilt, setLibrosFilt] = useState([]);

    const DataFiltered = (data) => {
        setLibrosFilt(data)
    }

    const cargarLibros = async () => {
        const datos = await getLibros();
        setLibros(datos);
    }

    if (libros.length === 0){
        cargarLibros()
    }

    /*const libroreservado =  (book) => {
        setLibroReservado(book)
        
    }
     <ReservForm bookTitle={libroReservado.titulo} bookId={libroReservado.id}></ReservForm>
    */
    return(
        <> 
            <SearchBar placeholder={"Ingrese el titulo del libro, autor, formato..."} data={libros} DataFiltered={DataFiltered} page={0}></SearchBar>

           

            <Tablalibro listaLibros={librosFilt} data={libros}></Tablalibro>
        </>
    )
}