export const putLibro = async(Estudiante) => {
    const url = `http://localhost:8080/biblioteca/actualizar/${Estudiante.id}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const data = await resp.json();
}