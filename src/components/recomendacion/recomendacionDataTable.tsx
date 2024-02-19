import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Loading } from '@/components/ui/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronDown  } from '@fortawesome/free-solid-svg-icons';

import type { Recomendacion, Lote } from '@/components/recomendacion/recomendacion';

const recomendacionStatus = (status: Recomendacion["estado"]) => {
  switch (status) {
    case 'processing':
      return <Badge variant="default">Procesando</Badge>
    case 'results_available':
      return <Badge variant="secondary">Resultados disponibles</Badge>
    case 'downloaded':
      return <Badge variant="outline">Descargado</Badge>
    case 'sent':
      return <Badge variant="destructive">Resultados disponibles</Badge>
    default:
      return <div>-</div>;
  }
}

export default function DataTable({ list, loading }: { list: Recomendacion[], loading: boolean }) {
  return (
    <Table className="px-1">
      {loading && <TableCaption><Loading /></TableCaption>}
      {(!loading && !list.length) && <TableCaption>Aún no tienes recomendaciones!</TableCaption>}
      {/* Header de la tabla principal */}
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Propiedad</TableHead>
          <TableHead>Cant. Lote</TableHead>
          <TableHead>Distribuidor</TableHead>
          <TableHead>Cultivo</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Creado por</TableHead>
          <TableHead className="w-[60px]">Sembrado</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((recomendacion: Recomendacion) => (
          <Collapsible key={recomendacion.id.toString()} asChild>
            <>
              {/* Cada fila principal iterada */}
              <CollapsibleTrigger asChild type={undefined} className={recomendacion.lotes?.length ? 'cursor-pointer' : ''}>
                <TableRow className="rounded-lg shadow-md">
                    <TableCell>{recomendacion.id.toString()}</TableCell>
                    <TableCell>{recomendacion.cliente}</TableCell>
                    <TableCell>{recomendacion.propiedad}</TableCell>
                    <TableCell>{recomendacion.cantidad.toString()}</TableCell>
                    <TableCell>{recomendacion.distribuidor}</TableCell>
                    <TableCell>{recomendacion.cultivo}</TableCell>
                    <TableCell>
                      { recomendacionStatus(recomendacion.estado) }
                    </TableCell>
                    <TableCell>{recomendacion.creado}</TableCell>
                    <TableCell className="text-right">
                      {recomendacion.sembrado &&
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-600 mr-2" />
                      }
                    </TableCell>
                    <TableCell className="text-center">
                      <FontAwesomeIcon icon={faChevronDown} size="sm" className="text-gray-500 mr-2" />
                    </TableCell>
                </TableRow>
              </CollapsibleTrigger>

              {/* Si tiene data que desplegar */}
              {recomendacion.lotes?.length &&
              <CollapsibleContent asChild>
                <TableRow className="-mt-4">
                  <TableCell colSpan={10} className="p-0">
                    <Table className="border-spacing-y-0 bg-gray-50 rounded-lg">
                      <TableHeader>
                        <TableRow className="">
                          <TableHead>Lote</TableHead>
                          <TableHead>Fecha de siembra</TableHead>
                          <TableHead>Hibrido</TableHead>
                          <TableHead colSpan={4}>Superficie</TableHead>
                          <TableHead>Sembrado</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <>{
                        recomendacion.lotes.map((lote: Lote) => (
                          <TableRow key={lote.id.toString()}>
                            <TableCell className="border-b">{lote.nombre}</TableCell>
                            <TableCell className="border-b">{lote.fecha}</TableCell>
                            <TableCell className="border-b">{lote.hibrido}</TableCell>
                            <TableCell className="border-b">{lote.superficie}</TableCell>
                            <TableCell className="border-b" colSpan={1}>-</TableCell>
                            <TableCell className="border-b text-right">
                              <Button variant="default" size="sm">
                                Enviar seguimiento a Nidera
                              </Button>
                            </TableCell>
                            <TableCell className="border-b text-center" colSpan={2}>
                            {lote.sembrado &&
                              <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-600 mr-2" />
                            }
                            </TableCell>
                          </TableRow>
                          ))
                        }</>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              </CollapsibleContent>
              }
            </>
          </Collapsible>
        ))}
      </TableBody>
    </Table>
  )
}