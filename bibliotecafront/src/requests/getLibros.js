
export const getLibros = async() => {
    const url = "http://localhost:8080/biblioteca/todos"
    const resp = await fetch(url);
    const data = await resp.json();

    const  librosList =   data.map( libro => ({
        titulo: libro.titulo,
        id: libro.id,
        autor: libro.autor,
        tipo: libro.tipo,
        formato: libro.formato,
        ano: libro.ano,
        paginas: libro.paginas,
        estado: libro.estado
    }))
    return librosList;
}