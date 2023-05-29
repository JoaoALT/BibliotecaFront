import "./TablaStyles.css"

export const TablaReservas =  ({listaLibros, libroreservado}) => {

    /*
    const ClickedBook = (book) =>{
        const resumedbook = {
            titulo: book.titulo,
            id: book.id
        }
        libroreservado(resumedbook)
    }
    onClick={ClickedBook(libro)}
    */
      

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">ID</th>
                        <th scope="col">Semanas</th>
                        <th scope="col">Días</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaLibros.map((libro) => <tr key={libro.id}>
                            <td>{libro.nombre}</td>
                            <td>{libro.apellido}</td>
                            <td>{libro.rut}</td>
                            <td>{libro.celular}</td>
                            <td>{libro.correo}</td>
                            <td>{libro.titulo}</td>
                            <td>{libro.id}</td>
                            <td>{libro.semanas}</td>
                            <td>{libro.dias}</td>
                            <td> 
                            <button class="button-5" role="button" >Eliminar</button> 
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </>

        
    )
}