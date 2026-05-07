import { useState } from "react"
import FormularioRegistro from "./FormularioRegistro"
import ResumenRegistro from "./ResumenRegistro"

function PanelRegistro() {
    const [datosReg,setDatosReg] = useState(null)
  return (
    <div>
        {!datosReg ? (
            <FormularioRegistro onRegistroCorrecto={setDatosReg}/>
        ): (
            <ResumenRegistro datos={datosReg}/>
        )}
    </div>
  )
}

export default PanelRegistro