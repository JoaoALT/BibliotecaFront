import { useEffect, useState } from "react";
import { TablaReservas } from "../components/TablaReservas";
import { getReservas } from "../requests/getReservas";
import { SearchBar } from "../components/SearchBar";
import {deleteReserva} from "../requests/deleteReserva"
import "./MenuStyles.css";

export const Reservas = () => {
    const [reservas, setReservas] = useState([]);
    const [reservasFilt, setReservasFilt] = useState([]);

    const DataFiltered = (data) => {
        if (data.length == 0){
            showAll();
        }else{
            setReservasFilt(data)
        }
    }

    const cargarReservas = async () => {
        const datos = await getReservas();
        setReservas(datos);
    }

    if (reservas.length == 0){
        cargarReservas();
    }
    
    const showAll = () =>{
        setReservasFilt(reservas);
    }

    const borrarReserva = (reserva) =>{
        let opcion = window.confirm("¿Realmente desea borrar su reserva?")

        if(opcion){
            deleteReserva(reserva.rut);
            showAll();
        }

    }

    /*const libroreservado =  (book) => {
        setLibroReservado(book)
        
    }
     <ReservForm bookTitle={libroReservado.titulo} bookId={libroReservado.id}></ReservForm>
    */
    return(
        <>

            <SearchBar placeholder={"Ingrese su nombre, apellido..."} data={reservas} DataFiltered={DataFiltered} page={1}></SearchBar>

           
            <TablaReservas listaLibros={reservasFilt} data={reservas} borrarReserva={borrarReserva}></TablaReservas>
        </>
    )
}