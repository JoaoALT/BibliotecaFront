export const deleteReserva = async(id) => {
    const url = "http://localhost:8080/reservas/eliminar/"+ id;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const data = await resp.json();
}