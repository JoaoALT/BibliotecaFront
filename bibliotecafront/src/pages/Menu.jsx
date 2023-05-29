import { useEffect, useState } from "react";
import { Tablalibro } from "../components/TablaLibros";
import { getLibros } from "../requests/getLibros";
import { SearchBar } from "../components/SearchBar";
import { ReservForm} from "../components/ReservForm";
import {postReserva} from "../requests/postReserva";
import { putLibro } from "../requests/putLibro";

import "./MenuStyles.css";

export const Menu = () => {
    const [libros, setLibros] = useState([]);
    const [librosFilt, setLibrosFilt] = useState([]);
    const [toggle, setToggle] = useState(false);

    const [tituloReserva, setTituloReserva] = useState("");
    const [idReserva, setIdReserva] = useState(0);


    const guardar = (reserva) =>{
        console.log(reserva);
        postReserva(reserva);
        putLibro(reserva);
        setToggle(!toggle);

    }


    const reservation = (cleanbook) => {
        setToggle(!toggle);
        setTituloReserva(cleanbook.titulo);
        setIdReserva(cleanbook.id);
    }

    const DataFiltered = (data) => {
        if (data.length == 0){
            showAll();
        }
        else{
            setLibrosFilt(data)
        }
    }

    const showAll = () =>{
        setLibrosFilt(libros);
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
        
            {toggle && (
                <ReservForm bookId={idReserva} bookTitle={tituloReserva} guardar={guardar}></ReservForm>
            )}           

            <Tablalibro listaLibros={librosFilt} data={libros} reservation={reservation}></Tablalibro>
        </>
    )
}