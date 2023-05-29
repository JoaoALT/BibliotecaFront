export const postReserva = async(estudiante) => {
    const url = "http://localhost:8080/reservas/crear"
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(estudiante)
    });
    const data = await resp.json();
    console.log(estudiante);
}