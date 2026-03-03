export type Student = {
    id: string;
    matricula: string;
    nombre: string;
    email: string;
    carrera: string;
    semestre: number;
    activo: boolean;
};

export type Course ={
    id: string;
    clave: string;
    nombre: string;
    creditos: number;
    profesor: string;
    activo: boolean;
};

export type Enrollment = {
    id: string;
    studentId: string;
    courseId: string;
    periodo: string;
    estatus: string;

    student?: Student;
    course?: Course;

};