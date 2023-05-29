import "./TablaStyles.css"

export const Tablalibro =  ({listaLibros, libroreservado}) => {

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
                        <th scope="col">Título</th>
                        <th scope="col">ID</th>
                        <th scope="col">Autór</th>
                        <th scope="col">Clasificación</th>
                        <th scope="col">Formato</th>
                        <th scope="col">Año</th>
                        <th scope="col">Páginas</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaLibros.map((libro) => <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.id}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.tipo}</td>
                            <td>{libro.formato}</td>
                            <td>{libro.ano}</td>
                            <td>{libro.paginas}</td>
                            <td id="estado">{libro.estado}</td>
                            <td> 
                            <button class="button-5" role="button" >Reservar</button> 
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </>

        
    )
}