const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

//ruta de prueba
app.get('/', (req, res) => {
    res.send('Api funcionando correctamente')
})

//obtener los cursos
app.get('/api/courses', (req,res) => {
    db.query('SELECT * FROM courses', (err, result) =>{
        if(err){
            return res.status(500).json({error: 'Error al obtenr cursos'})
        }
        res.json(result)
    })
})

//obtenemos por id
app.get('/api/courses/:id', (req,res)=>{
    const id = req.params.id

    db.query(
        'SELECT * FROM courses WHERE id = ?',[id],
        (err, result) => {
            if(err){
                return res.status(500).json({error: 'Error al obtener curso'})
            }
            
            if(result.length === 0){
                return res.status(404).json({error: 'Error curso no encontrado'})
            }
            res.json(result[0])   
        }
    )
})

//crear cursos
app.post('/api/courses', (req, res) => {
    const {name, category, duration, mode, teacher, description} = req.body

    db.query(
        'INSERT INTO courses (name, category, duration, mode, teacher, description) VALUES (?,?,?,?,?,?)',
        [name, category, duration, mode, teacher, description],
        (err, result) => {
            if(err){
                return res.status(500).json({error: 'Error al crear el curso'})
            }

            res.json({
                message: 'Curso insertado correctamente',
                id: result.insertId
            })
        }
    )
})

app.listen(3000, ()=>{
    console.log('Servidor backend en http://localhost:3000')
})
