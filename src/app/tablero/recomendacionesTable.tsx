import Link from "next/link";
import { useRouter } from 'next/navigation'
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
import { faCircleCheck, faChevronDown, faExclamationCircle  } from '@fortawesome/free-solid-svg-icons';

import type { Recomendacion, Lote } from '@/app/recomendacion/recomendacion';

const recomendacionStatus = (status: Recomendacion["estado"]) => {
  switch (status) {
    case 'processing':
      return <Badge variant="default">Procesando</Badge>
    case 'results_available':
      return <Badge variant="destructive">Resultados disponibles</Badge>
    case 'downloaded':
      return <Badge variant="outline">Descargado</Badge>
    case 'sent':
      return <Badge variant="secondary">Enviado</Badge>
    case 'error':
      return <Badge variant="error">Revision <FontAwesomeIcon icon={faExclamationCircle} className="ml-2" /></Badge>
    default:
      return <div>-</div>;
  }
}

export default function DataTable({ list, loading }: { list: Recomendacion[], loading: boolean }) {
  const router = useRouter()

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
              <TableRow className="rounded-lg shadow-md cursor-pointer">
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.id.toString()}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.cliente}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.propiedad}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.cantidad.toString()}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.distribuidor}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  {recomendacion.cultivo}
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>
                  { recomendacionStatus(recomendacion.estado) }
                </TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)}>{recomendacion.creado}</TableCell>
                <TableCell onClick={() => router.push(`/recomendacion/${recomendacion.id.toString()}`)} className="text-right">
                  {recomendacion.sembrado &&
                    <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-600 mr-2" />
                  }
                </TableCell>
                <CollapsibleTrigger asChild type={undefined} className={recomendacion.lotes?.length ? 'cursor-pointer' : ''}>
                  <TableCell className="text-center">
                    <FontAwesomeIcon icon={faChevronDown} size="sm" className="text-gray-500 mr-2" />
                  </TableCell>
                </CollapsibleTrigger>
              </TableRow>
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
                                Enviar seguimiento a Asista
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