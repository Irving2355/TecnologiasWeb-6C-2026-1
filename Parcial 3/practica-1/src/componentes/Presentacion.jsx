function Presentacion(props){
    return(
        <div>
            <h2>Componente Presentacion</h2>
            <p>Mi nombre es {props.nombre}</p>
            <p>Estoy usando {props.material}</p>
        </div>
    )
}

export default Presentacion 