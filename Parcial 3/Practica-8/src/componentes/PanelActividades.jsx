import { useState } from "react"
import { actividades } from "../data/actividades"
import FiltroCategorias from "./FiltroCategorias"
import ListaActividades from "./ListaActividades"

function PanelActividades() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

    const actividadesFiltradas = 
    categoriaSeleccionada === 'Todas' ?
    actividades :
    actividades.filter(
        (actividad) => actividad.categoria === categoriaSeleccionada
    )

  return (
    <main>
        <FiltroCategorias
        categoriaSeleccionada={categoriaSeleccionada}
        onCambiarCategoria={setCategoriaSeleccionada}
        />

        <p>Mostrando {actividadesFiltradas.length} actividad(es)</p>

        <ListaActividades actividades={actividadesFiltradas}/>
    </main>
  )
}

export default PanelActividades