export interface IAttend {
    id: number,
    userId: number,
    ramo: {
        sigla: string,
        seccion: string
    },
    fecha: string,
    hora: string
}
