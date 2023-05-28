
export const Tablalibro =  ({listaLibros}) => {
      

    return (
        <>
            <table className="table table-striped">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Id libro</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Facultad</th>
                        <th scope="col">Programa</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaLibros.map((libro) => <tr key={libro.id}>
                            <td>{libro.id}</td>
                            <td>{libro.nombre}</td>
                            <td>{libro.semestre}</td>
                            <td>{libro.facultad}</td>
                            <td>{libro.programa}</td>
                            <td> 
                            <button className="btn btn-outline-info me-2">Editar</button> 
                            <button className="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>

        
    )
}