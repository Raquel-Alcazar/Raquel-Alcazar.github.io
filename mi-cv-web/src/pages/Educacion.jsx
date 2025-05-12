function Educacion () {
    const estudios = [
        {
            id: 1,
            nombre: 'Grado en Ingeniería Informática',
            centro: 'Universidad de Castilla-La Mancha',
            informacion: 'Intensificación en Tecnología de la Información'
        }
    ]

    const certificaciones = [
        {
            id: 1,
            nombre: 'Introducción al Desarrolo Web I (40 h)',
            centro: 'Google Actívate',
            enlace: 'https://drive.google.com/file/d/18GsXFt9mY7YV3lEvW8Llxe_Z3TLODEd9/view'
        },
        {
            id: 2,
            nombre: 'Permiso B de conducir',
            centro: 'Dirección General de tráfico',
            enlace: ''
        }
    ]

    return (
        <section>
            <h2>Estudios</h2>
            {estudios.map((estudio) =>
                <div key={estudio.id}>
                    <h2>{estudio.nombre}</h2>
                    <h3>{estudio.centro}</h3>
                    <p>{estudio.informacion}</p>
                </div>
            )}
            <h2>Licencias y certificaciones</h2>
            {certificaciones.map((certificacion) =>
                <div key={certificacion.id}>
                    <h2>{certificacion.nombre}</h2>
                    <h3>{certificacion.centro}</h3>
                    {certificacion.enlace && <p>{certificacion.enlace}</p>}
                </div>
            )}
        </section>
    );
}

export default Educacion;