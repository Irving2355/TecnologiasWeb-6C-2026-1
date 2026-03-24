const {faker} = require('@faker-js/faker');
const db = require('./db');

const categorias =[
    'Frontend',
    'Backend',
    'Bases de datos',
    'Movil',
    'IA',
    'Programacion'
];

const modes = ['Online', 'Presencial', 'Mixto'];

for(let i=0; i<30; i++){
    const name = faker.company.catchPhrase();
    const category = faker.helpers.arrayElement(categorias);
    const duration = faker.number.int({min:10, max:40}+ ' horas');
    const mode = faker.helpers.arrayElement(modes);
    const teacher = faker.person.fullName();
    const description = faker.lorem.paragraph();

    db.query(
        'INSERT INTO courses (name,category,duration,mode, teacher,description) VALUES (?,?,?,?,?,?)',
            [name,category,duration,mode,teacher,description],
            (err) => {
                if(err){
                    console.error('Error al insertar', err);
                }
            }
    );
}

