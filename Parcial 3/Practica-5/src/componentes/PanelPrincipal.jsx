import PanelAlumno from './PanelAlumno'
import PanelPreferencias from './PanelPreferencias'
import FichaResumen from './FichaResumen'

function PanelPrincipal() {
  return (
    <div>
      <PanelAlumno />
      <PanelPreferencias />
      <FichaResumen />
    </div>
  )
}

export default PanelPrincipal