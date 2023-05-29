import { useEffect, useState } from "react";
import { TablaReservas } from "../components/TablaReservas";
import { getReservas } from "../requests/getReservas";
import { SearchBar } from "../components/SearchBar";
import "./MenuStyles.css";

export const Reservas = () => {
    const [reservas, setReservas] = useState([]);
    const [reservasFilt, setReservasFilt] = useState([]);

    const DataFiltered = (data) => {
        setReservasFilt(data)
    }

    const cargarReservas = async () => {
        const datos = await getReservas();
        setReservas(datos);
    }

    if (reservas.length == 0){
        cargarReservas()
    }

    /*const libroreservado =  (book) => {
        setLibroReservado(book)
        
    }
     <ReservForm bookTitle={libroReservado.titulo} bookId={libroReservado.id}></ReservForm>
    */
    return(
        <>

            <title>AAAAAAAAAAAAAAAA</title>
            <SearchBar placeholder={"Ingrese el titulo del libro, autor, formato..."} data={reservas} DataFiltered={DataFiltered} page={1}></SearchBar>

           
            <TablaReservas listaLibros={reservasFilt} data={reservas}></TablaReservas>
        </>
    )
}