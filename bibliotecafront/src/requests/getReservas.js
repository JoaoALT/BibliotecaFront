
export const getReservas = async() => {
    const url = "http://localhost:8080/reservas/todos"
    const resp = await fetch(url);
    const data = await resp.json();

    const  reservaList = data.map( reserva => ({
        nombre: reserva.nombre,
        apellido: reserva.apellido,
        rut: reserva.rut,
        celular: reserva.celular,
        correo: reserva.correoelectronico,
        titulo: reserva.nombrelibro,
        id: reserva.idlibro,
        semanas: reserva.semanas,
        dias: reserva.dias
    }))
    return reservaList;
}