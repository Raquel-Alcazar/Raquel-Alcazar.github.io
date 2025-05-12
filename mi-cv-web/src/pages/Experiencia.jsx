function Experiencia() {
    const experiencias = [
        {
            id: 1,
            puesto: 'Software Engineering Intern',
            empresa: 'OPINATOR',
            duracion: 'mar. 2023 - sept. 2023',
            descripcion: 'Prácticas curriculares del Grado en Ingeniería Informática.'
        },
        {
            id: 2,
            puesto: 'Becaria - TechLab',
            empresa: 'Universidad de Castilla-La Mancha',
            duracion: '',
            descripcion: 'TechLab es un espacio creado para que los alumnos de secundaria conozcan, experimenten y disfruten de las tecnologías. En él, pueden desarrollar sus propios proyectos a través de App-Inventor, Arduino y Blender.'
        }
    ]

    return (
        <section>
            <h2>Experiencia</h2>
            {experiencias.map((experiencia) => (
                <div key={experiencia.id}>
                    <h2>{experiencia.puesto}</h2>
                    <h3>{experiencia.empresa}</h3>
                    {experiencia.duracion && <h4>{experiencia.duracion}</h4>}
                    <p>{experiencia.descripcion}</p>
                </div>
            ))}
        </section>
    );
}

export default Experiencia;