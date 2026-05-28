function Inicio() {
  return (
    <section className="hero">
      <div className="panel">
        <span className="badge">React + Node.js</span>
        <h1>Panel académico conectado a una API propia</h1>
        <p>
          Esta práctica integra un frontend en React con un backend en Node.js y Express.
          El objetivo es trabajar rutas, middleware, controladores, servicios, variables
          de entorno y preparación para deploy.
        </p>
      </div>

      <aside className="stats">
        <div className="stat">
          <strong>4</strong>
          endpoints principales
        </div>
        <div className="stat">
          <strong>2</strong>
          proyectos conectados
        </div>
        <div className="stat">
          <strong>1</strong>
          flujo full-stack
        </div>
      </aside>
    </section>
  )
}

export default Inicio
