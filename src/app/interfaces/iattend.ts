export interface IAttend {
    id: number,
    userId: number,
    asignatura: string,
    ramo: {
        sigla: string,
        seccion: string
    },
    docente: string,
    correo: string,
    fecha: string,
    hora: string
}
