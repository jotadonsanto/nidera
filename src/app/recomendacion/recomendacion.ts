type Recomendacion = {
  id: number,
  cliente: string,
  propiedad: string,
  cantidad: number,
  distribuidor: string,
  cultivo: string,
  estado: string,
  creado: string,
  sembrado: boolean,
  lotes?: Lote[],
}

type Lote = {
  id: number,
  nombre: string,
  fecha: string,
  hibrido: string,
  superficie?: string,
  estrategia?: string,
  sembrado?: boolean,
  riego?: boolean,
  indice?: string,
  bolsas_totales?: string,
}

export type {
  Recomendacion,
  Lote,
}